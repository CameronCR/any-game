import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ListPreview(props) {
  return (
    <a href="#" onClick={props.handleClick} className="list-group-item" data-toggle="modal" data-target="#modal">
      {props.item[props.previewName]}
    </a>
  );
}

ListPreview.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
};


export default ListPreview;
