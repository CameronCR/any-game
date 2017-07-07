import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as sportActions from '../../../actions/sports';

import SportsList from './SportsList';
import SportModal from './SportModal';

class Sports extends Component {
  constructor(props) {
    let date = new Date();
    super(props);
    this.state = {
      sport: {
        name: '',
        openingDate: date
      },
      modalTitle: 'Add a new Sport'
    };
    this.updateFormState = this.updateFormState.bind(this);
    this.setSport = this.setSport.bind(this);
    this.createSport = this.createSport.bind(this);
    this.removeSport = this.removeSport.bind(this);
    this.clearSport = this.clearSport.bind(this);
  }

  componentWillMount() {
    this.props.sportActions.loadSports();
  }

  updateFormState(event) {
    const field = event.target.name;
    let sport = this.state.sport;
    sport[field] = event.target.value;
    this.setState({sport: sport});
  }

  setSport(sport) {
    let title = 'Edit ' + sport.name;
    this.setState({
      sport: sport,
      modalTitle: title
    });
  }

  createSport() {
    this.props.sportActions.saveSport(this.state.sport);
  }

  removeSport() {
    this.props.sportActions.removeSport(this.state.sport);
  }

  clearSport() {
    let date = new Date();
    this.setState({
      sport: {
        name: '',
        openingDate: date
      },
      modalTitle: 'Add a new Sport'
    });
  }

  render() {
    return (
      <div>
        <h1>Sports Admin</h1>
        <button className="btn btn-outline-primary" data-toggle="modal" data-target="#sportModal" onClick={this.clearSport}>
          New Sport
        </button>
        <SportModal sport={this.state.sport}
                    modalTitle={this.state.modalTitle}
                    onChange={this.updateFormState}
                    deleteButton={this.removeSport}
                    saveButton={this.createSport} />
        <br />
        <SportsList sports={this.props.sports}
                    setSport={this.setSport} />
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
