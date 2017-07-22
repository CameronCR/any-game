import React from 'react';

import { formatDate } from '../common/Format';
import DatePickerInput from '../common/DatePickerInput';

// Need to add below <br />:
// {formatDate(props.sport.openingDate)}
function SportModalForm(props) {
  return(
    <div className="col-md-12">
      <form>
        <div className="form-group">
          <label>Sport Name</label>
          <input type="text"
                 name="name"
                 className="form-control"
                 onChange={props.onChange}
                 value={props.item.name} />
          <label>Slug</label>
          <input type="text"
                 name="slug"
                 className="form-control"
                 onChange={props.onChange}
                 value={props.item.slug} />
          <label>Acronym</label>
          <input type="text"
                 name="acronym"
                 className="form-control"
                 onChange={props.onChange}
                 value={props.item.acronym} />
           <label>Opening Day</label>
           <DatePickerInput value={props.item.openingDate}
                            handleChange={props.onChange}/>
           <br />
        </div>
      </form>
    </div>
  );
}

export default SportModalForm;
