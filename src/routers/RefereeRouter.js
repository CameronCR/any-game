import React from 'react';
import { Route } from 'react-router-dom';
import Teams from '../components/referee/teams/Teams';
import Sports from '../components/referee/sports/Sports';
import Users from '../components/referee/users/Users';
import Games from '../components/referee/games/Games';
import Locations from '../components/referee/locations/Locations';


const RefereeRouter = () => {
  return(
      <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
        <Route path="/referee/sports" component={Sports} />
        <Route path="/referee/teams" component={Teams} />
        <Route path="/referee/users" component={Users} />
        <Route path="/referee/games" component={Games} />
        <Route path="/referee/locations" component={Locations} />

      </main>
  );
};

export default RefereeRouter;
