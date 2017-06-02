import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TeamPreview = ({ team }) => {
  let link = '/referee/team-admin/' + team.name;
  return (
      <Link to={link} className="list-group-item">
          {team.location + " " + team.name}
      </Link>
  );
};

TeamPreview.propTypes = {
  team: PropTypes.object
};

export default TeamPreview;