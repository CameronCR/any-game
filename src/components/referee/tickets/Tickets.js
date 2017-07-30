import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ticketActions from '../../../actions/tickets';
import * as teamActions from '../../../actions/teams';

import RefereeLoading from '../RefereeLoading';

class Tickets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      errorMessage: ''
    };
    this.props.teamActions.loadTeams();
    this.getTickets = this.getTickets.bind(this);
  }

  getTickets(event){
    if(event.target.value != 'no-slug'){
      this.setState({
        error: false
      });
      this.props.ticketActions.loadTickets(event.target.value);
    } else {
      this.setState({
        error: true,
        errorMessage: "No Team Slug"
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Ticket Admin</h1>
        <div className="col-md-3">
          {this.state.error ? <div className="alert alert-warning" role="alert">{this.state.errorMessage}</div> : <div></div>}
          <select name="sport"
                  className="form-control"
                  onChange={this.getTickets} >
            <option value="all">Pick Team</option>
            {this.props.teams.map((option) => {
              if(option.slug) {
                return <option key={option.name} value={option.slug}>{option.name}</option>;
              } else {
                return <option key={option.name} value="no-slug">{option.name}</option>;
              }
            })}
          </select>
          <br />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    tickets: state.tickets,
    teams: state.teams
  };
}

function mapDispatchToProps(dispatch) {
  return {
    teamActions: bindActionCreators(teamActions, dispatch),
    ticketActions: bindActionCreators(ticketActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Tickets);
