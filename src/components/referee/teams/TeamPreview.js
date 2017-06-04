import React from 'react';
import { Link } from 'react-router-dom';

const TeamsListPreview = ({ team }) => {
  let link = '/referee/team-admin/' + team.name;
  return (
      <Link to={link} className="list-group-item">
          {team.location + " " + team.name}
      </Link>
  );
};

export default TeamsListPreview;