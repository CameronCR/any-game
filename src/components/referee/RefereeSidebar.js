import React, { Component} from 'react';

import navLink from '../common/navLink';

class RefereeSidebar extends Component {
  render() {
    return(
      <nav className="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
        <ul className="nav nav-pills flex-column">
          {navLink('/referee/teams', 'Teams')}
        </ul>
        <ul className="nav nav-pills flex-column">
          {navLink('/referee/sports', 'Sports')}
        </ul>
      </nav>
    );
  }
}
export default RefereeSidebar;