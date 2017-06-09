import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import TeamsList from './TeamsList';
import TeamFormManage from './TeamFormManage';
import TeamModal from './TeamModal';

class Teams extends Component {

  render() {
    return (
        <div>
          <h1>Teams Admin</h1>
          <TeamModal />
          <br />
          <div>
            <Route path="/referee/teams" component={TeamsList}/>
            <Route exact path="/referee/team" component={TeamFormManage} />
            <Route path="/referee/team/:teamName" component={TeamFormManage} />
          </div>
        </div>
    );
  }
}

export default Teams;