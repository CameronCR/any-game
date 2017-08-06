import React from 'react';

function GameModalForm(props) {
  return (
    <div className="col-md-12">
      <form>
        <div className="form-group">
          <div className="row">
            <div className="col-md-6">
              <label>Name</label>
              <input name="shortTitle"
                     type="text"
                     className="form-control"
                     onChange={props.onChange}
                     value={props.item.shortTitle} />
            </div>
            <div className="col-md-6">
              <label>Slug</label>
              <input name="shortTitle"
                     type="text"
                     className="form-control"
                     onChange={props.onChange}
                     value={props.item.shortTitle} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default GameModalForm;
