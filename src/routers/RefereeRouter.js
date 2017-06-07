import React from 'react';
import { Route } from 'react-router-dom';
import Teams from '../components/referee/teams/Teams';
import Sports from '../components/referee/sports/Sports';

const RefereeRouter = () => {
  return(
      <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
        <Route path="/referee/sports" component={Sports} />
        <Route path="/referee/sport" component={Sports} />
        <Route path="/referee/sport/:sportName" component={Sports} />
        <Route path="/referee/teams" component={Teams} />
        <Route path="/referee/team" component={Teams} />
        <Route path="/referee/team/:teamName" component={Teams} />
      </main>
  );
};

export default RefereeRouter;