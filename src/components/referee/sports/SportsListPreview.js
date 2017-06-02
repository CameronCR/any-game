import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SportsListPreview = ({ sport }) => {
  let link = '/referee/sport-admin/' + sport.name;
  return (
      <Link to={link} className="list-group-item">
          {sport.name}
      </Link>
  );
};

SportPreview.propTypes = {
  team: PropTypes.object
};

export default SportsListPreview;