import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import TeamFormManage from './TeamFormManage';
import TeamList from './TeamList';

const TeamsAdmin = ({ match })=> {

  return (
      <div>
        <h1>Teams Admin</h1>
        <div>
          <Route path='/referee/teams' component={TeamList}/>
          <Route exact path='/referee/team' component={TeamFormManage} />
          <Route path='/referee/team/:teamName' component={TeamFormManage} />
        </div>
      </div>
  );
};

export default TeamsAdmin;