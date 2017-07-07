import React from 'react';

function LocationModalForm(props) {
  return(
    <form>
      <div className="form-group">
        <label>Location Name</label>
        <input type="text"
               name="name"
               className="form-control"
               onChange={props.onChange}
               value={props.item.name} />
      </div>
    </form>
  );
}

export default LocationModalForm;
