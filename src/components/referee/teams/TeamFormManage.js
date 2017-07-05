import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TeamForm from './TeamForm';

import * as teamActions from '../../../actions/teams';
import * as sportActions from '../../../actions/sports';

class TeamFormManage extends Component {

  constructor(props, context) {
    super(props);
    this.state = {
      team: {
        name: '',
        location: '',
        city: '',
        sport: ''
      }
    };

    this.updateFormState = this.updateFormState.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  updateFormState(event) {
    const field = event.target.name;
    let team = this.state.team;
    team[field] = event.target.value;
    this.setState({team: team});
  }

  onClickSave(){
    console.log(this.state.team);
  }

  render() {
    return (
        <div className="col-md-8">
          <TeamForm
              team={this.state.team}
              onChange={this.updateFormState}
              allSports={this.props.sports}
          />
        
        </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    sports: state.sports
  };
}

function mapDispatchToProps(dispatch) {
  return {
    teamActions: bindActionCreators(teamActions, dispatch),
    sportActions: bindActionCreators(sportActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamFormManage);
