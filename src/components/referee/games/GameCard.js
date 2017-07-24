import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



function GameCard(props) {
  return (
    <a href="#" onClick={props.handleClick} className="list-group-item" data-toggle="modal" data-target="#modal">
      {props.item.name}
    </a>
  );
}

export default GameCard;
