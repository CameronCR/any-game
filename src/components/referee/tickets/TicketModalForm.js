import React from 'react';

import { formatDate } from '../../../lib/utilities';

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
          </div>
          <div className="row">
            <div className="col-md-6">
              <label>Sport</label>
              <select name="sport"
                      className="form-control"
                      onChange={props.onChange}
                      value={props.item.sport} >
                <option value="">Select a Sport</option>
                {props.sports.map((option) => {
                  return <option key={option.name} value={option.acronym.toLowerCase()}>{option.name}</option>;
                })}
              </select>
            </div>
            <div className="col-md-6">
              <label>Team</label>
              <select name="team"
                      className="form-control"
                      onChange={props.onChange}
                      value={props.item.team} >
                <option value="">Select a Team</option>
                {props.teams.map((option) => {
                  return <option key={option.slug} value={option.slug}>{option.name}</option>;
                })}
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label>Game</label>
              <select name="sport"
                      className="form-control"
                      onChange={props.onChange}
                      value={props.item.game} >
                <option value="">Select a Game</option>
                {props.games.map((option) => {
                  return <option key={option.id} value={option.id}>{option.short_title} - {formatDate(option.datetime_local)}</option>;
                })}
              </select>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TicketModalForm;
