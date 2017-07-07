import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function SportsListPreview(props) {
  return (
    <a href="#" onClick={props.handleClick} className="list-group-item" data-toggle="modal" data-target="#sportModal">
      {props.sport.name}
    </a>
  );
}

export default SportsListPreview;
