import React, { Component } from 'react';
import PropTypes from 'prop-types';

class List extends Component {
  constructor(props) {
    super(props);
    this.previewListing = this.previewListing.bind(this);
  }

  previewListing(item, index){
    const handleClick = () => this.props.setItem(item);
    return (
      <ListPreview item={item}
                   key={index}
                   handleClick={handleClick} />
    );
  }

  render() {
    return (
      <div className="col-md-4">
        <ul className="list-group">
          {this.props.list.map(this.previewListing)}
        </ul>
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
