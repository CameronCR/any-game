import React, { Component } from 'react';

import TeamFormManage from './TeamFormManage';
import TeamList from './TeamList';

class TeamCreate extends Component {
  render() {
    return (
        <div>
          <div className="col-md-4">
            <TeamList />
          </div>
          <div className="col-md-offset-1 col-md-4">
            <h2>Add Team</h2>
            <TeamFormManage type="create"/>
          </div>
        </div>
    );
  }
}

export default TeamCreate;
