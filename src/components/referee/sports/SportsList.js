import React, { Component } from 'react';

import * as sportActions from '../../../actions/sports';

import SportsListPreview from './SportsListPreview';

class SportsList extends Component {

  constructor(props) {
    super(props);
    this.sportListing = this.sportListing.bind(this);
  }

  sportListing(sport, index){
    const handleSportClick = () => this.props.setSport(sport);
    return <SportsListPreview sport={sport} key={index} handleClick={handleSportClick} />;
  }

  render() {
    return (
      <div className="col-md-4">
        <ul className="list-group">
          {this.props.sports.map(this.sportListing)}
        </ul>
      </div>
    );
  }
}

export default SportsList;
