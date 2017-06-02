import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SportSelector extends Component {
  render() {
    return (
        <Link to={link} className="list-group-item">
          {team.location + " " + team.name}
        </Link>
    );
  }
}


export default SportSelector;