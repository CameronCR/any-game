import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as sportActions from '../../../actions/sports';

import SportsList from './SportsList';
import SportModal from './SportModal';

class Sports extends Component {

  constructor(props) {
    let value = new Date().toISOString();
    super(props);
    this.state = {
      sport: {
        name: '',
        openingDate: value
      },
      modalTitle: 'Add a new Sport'
    };

    this.setSport = this.setSport.bind(this);
    this.clearSport = this.clearSport.bind(this);
    this.saveSport = this.saveSport.bind(this);
    this.updateFormState = this.updateFormState.bind(this);
  }

  updateFormState(event) {
    const field = event.target.name;
    let sport = this.state.sport;
    sport[field] = event.target.value;
    this.setState({sport: sport});
  }

  setSport(sport){
    let title = 'Edit ' + sport;
    this.setState({
      sport: {
        name: sport
      },
      modalTitle: title
    });
  }

  clearSport() {
    this.setState({
      sport: {
        name: ''
      },
      modalTitle: 'Add a new Sport'
    });
  }

  saveSport(){
    // console.log('Saving Sport: ' + this.state.sport.name);
    this.props.sportActions.saveSport(this.state.sport);
  }

  render() {
    return (
      <div>
        <h1>Sports Admin</h1>
        <button className="btn btn-outline-primary" data-toggle="modal" data-target="#sportModal" onClick={this.clearSport}>
          New Sport
        </button>
        <div>
          <div className="modal fade" id="sportModal" role="dialog" aria-labelledby="sportModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="sportModalLabel">{this.state.modalTitle}</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <SportModal changeInput={this.updateFormState} value={this.state.sport} />
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary" onClick={this.saveSport} data-dismiss="modal">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div>
          <SportsList setSport={this.setSport} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    sports: state.sports
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sportActions: bindActionCreators(sportActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Sports);
