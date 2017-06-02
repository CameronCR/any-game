import React from 'react';
import DatePicker from 'react-bootstrap-date-picker';

const SportForm = (sport, onSave, onChange) => {
  return(
      <form>
        <div className="form-group">
          <label>Name</label>
          <input type="text"
                 className="form-control"
                 onChange={onChange}
                 value={sport.name} />
          <label>Opening Day</label>
          <DatePicker
              id="datepicker"
              value={sport.openingDate}
              onChange={onChange} />
        </div>
        <input type="submit"
               value="Add"
               className="btn btn-lg btn-default"
               onClick={onSave} />
      </form>
  )
};

export default SportForm
