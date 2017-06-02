import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import RefereeConsole from '../components/referee/RefereeConsole';



const GlobalRouter = () => {
  return(
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={RefereeConsole} />
            <Route path="/referee" component={RefereeConsole}/>
          </Switch>
        </div>
      </BrowserRouter>
  );
};

export default GlobalRouter;