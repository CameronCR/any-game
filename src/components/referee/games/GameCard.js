import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { formatDate } from '../../../lib/utilities';

function GameCard(props) {
  return (
    <div className="card" style={{width: '20rem', margin: '10px'}}>
      <div className="card-block">
        <h4 className="card-title">{props.game.short_title}</h4>
        <p className="card-text">{formatDate(props.game.datetime_local)}</p>
        <a href="#" className="btn btn-primary" onClick={props.handleClick} data-toggle="modal" data-target="#modal">{props.buttonText}</a>
      </div>
    </div>
  );
}

export default GameCard;
