import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import List from '../common/List';
import Modal from '../common/Modal';

import * as ticketActions from '../../../actions/tickets';
import * as teamActions from '../../../actions/teams';
import * as sportActions from '../../../actions/sports';
import * as venueActions from '../../../actions/venues';

import TicketModalForm from './TicketModalForm';

const ticketObj = {
  ticket: {
    name: '-1',
    price: '',
    date: '',
    game_id: ''
  },
  modalTitle: 'Add a new Ticket'
};

class Tickets extends Component {
  constructor(props) {
    super(props);
    this.state = ticketObj;

    this.updateFormState = this.updateFormState.bind(this);

    this.setTicket = this.setTicket.bind(this);
    this.clearTicket = this.clearTicket.bind(this);
    this.saveTicket = this.saveTicket.bind(this);
    this.removeTicket = this.removeTicket.bind(this);

    this.filterBySport = this.filterBySport.bind(this);
    this.filterByTeam = this.filterByTeam.bind(this);

    this.props.ticketActions.loadTickets();
  }

  componentWillMount() {
    this.props.ticketActions.loadTickets();
    this.props.teamActions.loadTeams();
    this.props.sportActions.loadSports();
    this.props.venueActions.loadVenues();
  }

  updateFormState(event) {
    const field = event.target.name;
    let ticket = this.state.team;
    ticket[field] = event.target.value;
    this.setState({ticket: ticket});
  }

  setTicket(ticket) {
    let title = 'Edit ' + ticket.id;
    let ticketSet = Object.assign({}, ticketObj, ticket);
    this.setState({
      ticket: ticketSet,
      modalTitle: title
    });
  }

  clearTicket() {
    this.setState(ticketObj);
  }

  saveTicket() {
    this.props.ticketActions.saveTicket(this.state.ticket);
  }

  removeTicket() {
    this.props.ticketActions.removeTicket(this.state.ticket);
  }

  filterByTeam(event) {
    let selection = event.target.value;
    if (selection == ''){
      this.props.ticketActions.loadTickets();
    } else {
      this.props.ticketActions.loadTickets(selection);
    }
  }

  filterBySport(event) {
    let selection = event.target.value;
    if (selection == ''){
      this.props.teamActions.loadTeams();
    } else {
      this.props.teamActions.loadTeams(selection);
    }
  }

  render() {
    return (
        <div>
          <h1>Ticket Admin</h1>
          <div className="row col-md-10">
            <button className="btn btn-outline-primary" data-toggle="modal" data-target="#modal" onClick={this.clearTeam}>
              New Ticket
            </button>
            <div className="col-md-3">
              <select name="sport"
                      className="form-control"
                      onChange={this.filterBySport} >
                <option value="">All Sports</option>
                {this.props.sports.map((option) => {
                  return <option key={option.name} value={option.name}>{option.name}</option>;
                })}
              </select>
            </div>
          </div>
          <Modal item={this.state.ticket}
                 modalTitle={this.state.modalTitle}
                 onChange={this.updateFormState}
                 deleteButton={this.removeTicket}
                 saveButton={this.createTicket}
                 modalForm={TicketModalForm}

                 sports={this.props.sports}
                 venues={this.props.venues} />
          <br />
          <List list={this.props.tickets.ticketsArray}
                setItem={this.setTicket}

                previewName="id"/>
        </div>
    );
  }
}


function mapStateToProps(state, ownProps) {
  return {
    tickets: state.tickets,
    teams: state.teams,
    sports: state.sports,
    vanues: state.venues
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ticketActions: bindActionCreators(ticketActions, dispatch),
    teamActions: bindActionCreators(teamActions, dispatch),
    sportActions: bindActionCreators(sportActions, dispatch),
    venueActions: bindActionCreators(venueActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Tickets);
