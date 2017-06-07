import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SportForm from './SportForm';

import * as sportActions from '../../../actions/sports';

class SportFormManage extends Component {

  constructor(props, context) {
    super(props);

    this.updateFormState = this.updateFormState.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  updateFormState(event) {
    const field = event.target.name;
    let sport = this.state.sport;
    sport[field] = event.target.value;
    return this.setState({sport: sport});
  }


  onClickSave(){
    console.log('Saved');
  }

  render() {
    return (
        <div className="col-md-8">
          <SportForm
              sport={this.props.sport}
              onSave={this.onClickSave}
              onChange={this.updateFormState}
          />
        </div>
    );
  }
}


function mapStateToProps(state, ownProps) {
  let sport  = {
    name: ''
  };
  return {
    sport: sport,
    sports: state.sports
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sportActions: bindActionCreators(sportActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SportFormManage);