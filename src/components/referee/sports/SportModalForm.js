import React from 'react';

function SportModalForm(props) {
  return(
    <form>
      <div className="form-group">
        <label>Sport Name</label>
        <input type="text"
               name="name"
               className="form-control"
               onChange={props.onChange}
               value={props.sport.name} />
      </div>
    </form>
  );
}

export default SportModalForm;
