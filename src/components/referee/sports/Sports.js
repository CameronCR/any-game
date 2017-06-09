import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import SportsList from './SportsList';
import SportFormManage from './SportFormManage';
import SportModal from './SportModal';

class Sports extends Component {

  render() {
    return (
      <div>
        <h1>Sports Admin</h1>
        <SportModal />
        <br />
        <div>
          <Route path="/referee/sports" component={SportsList}/>
          <Route exact path="/referee/sport" component={SportFormManage} />
          <Route path="/referee/sport/:sportName" component={SportFormManage} />
        </div>
      </div>
    );
  }
}

export default Sports;