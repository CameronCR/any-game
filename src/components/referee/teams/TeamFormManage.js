import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TeamForm from './TeamForm';

import * as teamsActions from '../../../actions/teams';
import * as sportActions from '../../../actions/sports';

class TeamFormManage extends Component {

  constructor(props, context) {
    super(props);

    this.updateFormState = this.updateFormState.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }


  updateFormState(event) {
    const field = event.target.name;
    let team = this.state.team;
    team[field] = event.target.value;
    return this.setState({team: team});
  }


  onClickSave(){
    console.log('Saved');
  }

  render() {
    return (
        <div className="col-md-4">
          <TeamForm
              team={this.props.team}
              onSave={this.onClickSave}
              onChange={this.updateFormState}
          />
        </div>
    );
  }
}


function mapStateToProps(state, ownProps) {
  console.log(this.props)
  let team = {
    name: '',
    location: '',
    city: ''
  };
  return {
    team: team,
    sports: state.sports,
    teams: state.teams
  };
}

function mapDispatchToProps(dispatch) {
  return {
    teamActions: bindActionCreators(teamsActions, dispatch),
    sportActions: bindActionCreators(sportActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamFormManage);
