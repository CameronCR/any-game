import React from 'react';

function VenueModalForm(props) {
  return(
    <div className="col-md-12">
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
    </div>
  );
}

export default VenueModalForm;
