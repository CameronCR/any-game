import React from 'react';
import SelectInput from '../../common/SelectInput';

const TeamForm = ({team, allSports, onSave, onChange, saving, errors}) => {
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
          <SelectInput
              name="team-selector"
              label="Sport"
              value={team.sport}
              defaultOption="Select a Team"
              options={allSports}
              onChange={onChange}
              error={errors.sport}/>
        </div>
        <input type="submit"
               value={saving ? 'Adding...' : 'Add'}
               className="btn btn-lg btn-default"
               onClick={onSave} />
      </form>
  )
};

export default TeamForm