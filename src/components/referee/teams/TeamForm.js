import React from 'react';

const TeamForm = ({team, onChange, allSports}) => {
  return (
    <form>
      <div className="form-group">
        <label>Name</label>
        <input name="name"
               type="text"
               className="form-control"
               onChange={onChange}
               value={team.name} />
        <label>Location</label>
        <input name="location"
               type="text"
               className="form-control"
               onChange={onChange}
               value={team.location} />
        <label>City</label>
        <input name="city"
               type="text"
               className="form-control"
               onChange={onChange}
               value={team.city} />
        <label>Sport</label>
        <select name="sport"
                className="form-control"
                value={team.sport}
                onChange={onChange}>
          <option value="">Select a Sport</option>
          {allSports.map((option) => {
            return <option key={option.name} value={option.name}>{option.name}</option>;
          })}
        </select>
      </div>
    </form>
  );
};

export default TeamForm;