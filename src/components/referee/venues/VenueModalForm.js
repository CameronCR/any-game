import React from 'react';

function VenueModalForm(props) {
  return(
    <form>
      <div className="form-group">
        <label>Venue Name</label>
        <input type="text"
               name="name"
               className="form-control"
               onChange={props.onChange}
               value={props.item.name} />
      </div>
    </form>
  );
}

export default VenueModalForm;
