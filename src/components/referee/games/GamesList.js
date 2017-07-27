import React, { Component } from 'react';
import PropTypes from 'prop-types';

import GameCard from './GameCard';

import { formatDate } from '../../../lib/utilities';

class GameList extends Component {
  constructor(props) {
    super(props);
    this.previewListing = this.previewListing.bind(this);
  }

  previewListing(item, index){
    const handleClick = () => this.props.setItem(item);
    return (
      <GameCard key={index}
                game={item}
                handleClick={handleClick} />
    );
  }

  render() {
    return (
      <div className="col-md-12">
        <h4>Upcoming {this.props.list.length} games</h4>
        <div className="row">
          {this.props.list.map(this.previewListing)}
          <div className="card" style={{width: '20rem', margin: '10px'}}>
            <div className="card-block">
              <br />
              <br />
              <a href="#" style={{marginRight: 'auto', marginLeft: 'auto', display: 'block'}} className="col-md-8 btn btn-outline-primary">Load More Games</a>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

GameList.propTypes = {
  list: PropTypes.array.isRequired,
  setItem: PropTypes.func.isRequired
};

export default GameList;
