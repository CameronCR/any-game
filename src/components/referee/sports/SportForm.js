import React from 'react';

const SportForm = ({sport, onChange}) => {
  return(
      <form>
        <div className="form-group">
          <label>Sport Name</label>
          <input type="text"
                 className="form-control"
                 onChange={onChange}
                 value={sport.name} />
        </div>
      </form>
  )
};

export default SportForm
