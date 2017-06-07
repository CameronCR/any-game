import React from 'react';
import SelectInput from '../../common/SelectInput';

const TeamForm = ({team, onChange}) => {
  return (
      <form>
        <div className="form-group">
          <label>Name</label>
          <input
              type="text"
              className="form-control"
              onChange={onChange}
              value={team.name} />
          <label>Location</label>
          <input
              type="text"
              className="form-control"
              onChange={onChange}
              value={team.location} />
          <label>City</label>
          <input
              type="text"
              className="form-control"
              onChange={onChange}
              value={team.city} />
        </div>
      </form>
  )
};

export default TeamForm