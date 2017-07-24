import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { formatDate } from '../../../lib/utilities';

class List extends Component {
  constructor(props) {
    super(props);
    this.previewListing = this.previewListing.bind(this);
  }

  previewListing(item, index){
    const handleClick = () => this.props.setGame(item);
    return (
      <div className="card" style={{width: '20rem', margin: '10px'}}>
        <div className="card-block">
          <h4 className="card-title">{item.short_title}</h4>
          <p className="card-text">{formatDate(item.datetime_local)}</p>
          <a href="#" className="btn btn-primary" onClick={handleClick} data-toggle="modal" data-target="#modal">Load Game</a>
        </div>
      </div>
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

List.propTypes = {
  list: PropTypes.array.isRequired,
  setItem: PropTypes.func.isRequired,
  preview: PropTypes.string
};

List.defaultProps = {
  preview: 'ListPreview'
};

export default List;
