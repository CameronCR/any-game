import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SportsListPreview extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.handleClick(this.props.sport.name);
  }

  render(){
    return (
      <li onClick={this.handleClick} className="list-group-item" data-toggle="modal" data-target="#sportModal">
        {this.props.sport.name}
      </li>
    );
  }
}

export default SportsListPreview;