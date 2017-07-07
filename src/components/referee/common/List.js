import React, { Component } from 'react';

class List extends Component {

  constructor(props) {
    super(props);
    this.previewListing = this.previewListing.bind(this);
  }

  previewListing(item, index){
    const handleClick = () => this.props.setItem(item);
    const PreviewComponent = this.props.previewComponent;
    return <PreviewComponent item={item} key={index} handleClick={handleClick} />;
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

export default List;
