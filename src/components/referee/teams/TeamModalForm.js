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
               value={props.item.name} />
        <label>Location</label>
        <input name="location"
               type="text"
               className="form-control"
               onChange={props.onChange}
               value={props.item.location} />
        <label>City</label>
        <input name="city"
               type="text"
               className="form-control"
               onChange={props.onChange}
               value={props.item.city} />
        <label>Slug</label>
        <input name="slug"
               type="text"
               className="form-control"
               onChange={props.onChange}
               value={props.item.slug} />
        <label>Sport</label>
        <select name="sport"
                className="form-control"
                onChange={props.onChange}
                value={props.item.sport} >
          <option value="">Select a Sport</option>
          {props.sports.map((option) => {
            return <option key={option.name} value={option.name}>{option.name}</option>;
          })}
        </select>
        <label>Venue</label>
        <select name="venue"
                className="form-control"
                onChange={props.onChange}
                value={props.item.venue} >
          <option value="">Select a Venue</option>
          {props.venues.map((option) => {
            return <option key={option.name} value={option.name}>{option.name}</option>;
          })}
        </select>
        <br/>
        <label className="btn btn-info">Seating Chart
          <input type="file"
                 onChange={props.selectFile}
                 hidden />
        </label>
        <label>{props.item.fileName}</label>
      </div>
    </form>
  );
}

export default TeamModalForm;
