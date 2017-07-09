import React from 'react';

import { formatDate } from '../common/Format';
import DatePickerInput from '../common/DatePickerInput';

// Need to add below <br />:
// {formatDate(props.sport.openingDate)}
function SportModalForm(props) {
  return(
    <form>
      <div className="form-group">
        <label>Sport Name</label>
        <input type="text"
               name="name"
               className="form-control"
               onChange={props.onChange}
               value={props.item.name} />
         <label>Opening Day</label>
         <br />
      </div>
    </form>
  );
}

export default SportModalForm;
