import React from 'react';

function TeamModalForm(props) {
  return (
    <form>
      <div className="form-group">
        <label>Name</label>
        <input name="name"
               type="text"
               className="form-control"
               onChange={props.onChange}
               value={props.team.name} />
        <label>Location</label>
        <input name="location"
               type="text"
               className="form-control"
               onChange={props.onChange}
               value={props.team.location} />
        <label>City</label>
        <input name="city"
               type="text"
               className="form-control"
               onChange={props.onChange}
               value={props.team.city} />
        <label>Sport</label>
        <select name="sport"
                className="form-control"
                onChange={props.onChange}
                value={props.team.sport} >
          <option value="">Select a Sport</option>
          {props.sports.map((option) => {
            return <option key={option.name} value={option.name}>{option.name}</option>;
          })}
        </select>
      </div>
    </form>
  );
}

export default TeamModalForm;
