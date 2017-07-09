import React from 'react';
import { Link } from 'react-router-dom';

function ListPreview(props) {
  return (
    <a href="#" onClick={props.handleClick} className="list-group-item" data-toggle="modal" data-target="#modal">
      {props.item.name}
    </a>
  );
}

export default ListPreview;