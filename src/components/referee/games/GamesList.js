import React, { Component } from 'react';
import PropTypes from 'prop-types';

import GameCard from './GameCard';

import { formatDate } from '../../../lib/utilities';

class GameList extends Component {
  constructor(props) {
    super(props);
    this.previewListing = this.previewListing.bind(this);
    this.title = this.title.bind(this);
    this.moreGames = this.moreGames.bind(this);
  }

  previewListing(item, index){
    const handleClick = () => this.props.setItem(item);
    return (
      <GameCard key={index}
                game={item}
                handleClick={handleClick} />
    );
  }

  title(){
    if(this.props.isLocal) {
      return <h4>{this.props.list.length} games found</h4>;
    } else {
      return <h4>Upcoming {this.props.list.length} games</h4>;
    }
  }

  moreGames(){
    if(!this.props.isLocal) {
      return (
        <div className="card" style={{width: '20rem', margin: '10px'}}>
          <div className="card-block">
            <br />
            <br />
            <a href="#"
               onClick={this.props.moreGames}
               style={{marginRight: 'auto', marginLeft: 'auto', display: 'block'}}
               className="col-md-8 btn btn-outline-primary">Load More Games</a>
            <br />
            <br />
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="col-md-12">
        {this.title()}
        <div className="row">
          {this.props.list.map(this.previewListing)}
          {this.moreGames()}
        </div>
      </div>
    );
  }
}

GameList.propTypes = {
  list: PropTypes.array.isRequired,
  //setItem: PropTypes.func.isRequired
};

export default GameList;
