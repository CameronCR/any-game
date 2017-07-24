import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { formatDate } from '../../../lib/utilities';

class List extends Component {
  constructor(props) {
    super(props);
    this.previewListing = this.previewListing.bind(this);
  }

  previewListing(item, index){
    let awayTeam = item.performers[1];
    return (
      <div className="card" style={{width: '20rem', margin: '10px'}}>
        <div className="card-block">
          <h4 className="card-title">{awayTeam.name}</h4>
          <p className="card-text">{formatDate(item.datetime_local)}</p>
          <a href="#" className="btn btn-primary">Load Game</a>
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
