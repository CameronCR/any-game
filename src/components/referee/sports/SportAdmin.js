import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import SportsList from './SportsList';
import SportFormManage from './SportFormManage';
import NewSportModal from './NewSportModal';


class SportAdmin extends Component {

  render() {
    return (
        <div>
          <h1>Teams Admin</h1>
          <NewSportModal />
          <div>
            <Route path='/referee/sports' component={SportsList}/>
            <Route exact path='/referee/sport' component={SportFormManage} />
            <Route path='/referee/sport/:sportName' component={SportFormManage} />
          </div>
        </div>
    );
  }
}

export default SportAdmin;