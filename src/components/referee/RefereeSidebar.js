import React, { Component} from 'react';
import { Link } from 'react-router-dom';


class RefereeSidebar extends Component {

  lineItem(link, text){
    if (link === this.props.path) {
      return <li className="nav-item"><Link className="nav-link active" to={link}>{text}</Link></li>;
    } else {
      return <li className="nav-item"><Link className="nav-link" to={link}>{text}</Link></li>;
    }
  }

  render() {
    return(
        <nav className="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
          <ul className="nav nav-pills flex-column">
            {this.lineItem('/referee/teams', 'Teams')}
          </ul>
          <ul className="nav nav-pills flex-column">
            {this.lineItem('/referee/sports', 'Sports')}
          </ul>
        </nav>
    );
  }
}
export default RefereeSidebar;