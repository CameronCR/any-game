import React from 'react';
import { Link } from 'react-router-dom';

const SportsListPreview = ({ sport }) => {
  let link = '/referee/sport/' + sport.name;
  return (
    <Link to={link} className="list-group-item">
      {sport.name}
    </Link>
  );
};

export default SportsListPreview;