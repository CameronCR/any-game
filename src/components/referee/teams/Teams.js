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

        </div>
    );
  }
}

export default Teams;