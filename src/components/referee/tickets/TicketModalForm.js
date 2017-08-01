import React from 'react';

function TicketModalForm(props) {
  return (
    <div className="col-md-12">
      <form>
        <div className="form-group">
          <div className="row">
            <div className="col-md-6">
              <label>ID</label>
              <input name="id"
                     type="text"
                     className="form-control"
                     onChange={props.onChange}
                     value={props.item.name}
                     disabled />
            </div>
            <div className="col-md-6">
              <label>Price</label>
              <input name="price"
                     type="text"
                     className="form-control"
                     onChange={props.onChange}
                     value={props.item.price} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label>Date</label>
              <input name="location"
                     type="text"
                     className="form-control"
                     onChange={props.onChange}
                     value={props.item.date} />
            </div>
            <div className="col-md-6">
              <label>Game ID</label>
              <input name="game_id"
                     type="text"
                     className="form-control"
                     onChange={props.onChange}
                     value={props.item.game_id} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TicketModalForm;
