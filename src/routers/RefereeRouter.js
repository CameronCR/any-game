import React from 'react';
import { Route } from 'react-router-dom';
import TeamsAdmin from '../components/referee/teams/TeamsAdmin';
import SportAdmin from '../components/referee/sports/SportAdmin';

const RefereeRouter = () => {
  return(
      <div>
        <Route path="/referee/sports" component={SportAdmin} />
        <Route path="/referee/sport" component={SportAdmin} />
        <Route path="/referee/sport/:sportName" component={SportAdmin} />
        <Route path="/referee/teams" component={TeamsAdmin} />
        <Route path="/referee/team" component={TeamsAdmin} />
      </div>
  );
};

export default RefereeRouter;