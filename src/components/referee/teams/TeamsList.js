import React, { Component } from 'react';

import * as teamActions from '../../../actions/teams';

import TeamsListPreview from './TeamsListPreview';

class TeamList extends Component {
  constructor(props) {
    super(props);
    this.teamListing = this.teamListing.bind(this);
  }

  teamListing(team, index){
    const handleTeamClick = () => this.props.setTeam(team);
    return <TeamsListPreview team={team} key={index} handleClick={handleTeamClick} />;
  }

  render() {
    return (
      <div className="col-md-4">
        <div className="list-group">
          {this.props.teams.map(this.teamListing)}
        </div>
      </div>
    );
  }
}

export default TeamList;
