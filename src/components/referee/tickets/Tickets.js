import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import List from '../common/List';
import Modal from '../common/Modal';

import * as ticketActions from '../../../actions/tickets';
import * as gameActions from '../../../actions/games';
import * as teamActions from '../../../actions/teams';
import * as sportActions from '../../../actions/sports';
import * as venueActions from '../../../actions/venues';

import RefereeLoading from '../RefereeLoading';
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
    this.modalLoading = this.modalLoading.bind(this);
    this.modalJSX = this.modalJSX.bind(this);

    this.filterBySport = this.filterBySport.bind(this);
    this.filterByTeam = this.filterByTeam.bind(this);

    this.props.ticketActions.loadTickets();
  }

  componentWillMount() {
    this.props.ticketActions.loadTickets();
    this.props.teamActions.loadTeams();
    this.props.sportActions.loadSports();
    this.props.venueActions.loadVenues();
    this.props.gameActions.loadGames();
  }

  updateFormState(event) {
    const field = event.target.name;
    let ticket = this.state.ticket;
    ticket[field] = event.target.value;
    this.setState({ticket: ticket});
    if(field == 'sport') {
      this.props.teamActions.loadTeamsBySport(event.target.value);
      this.props.gameActions.loadGamesBySport(event.target.value);
    }
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

  modalLoading() {
    let loadingState = this.props.loading;
    if(loadingState.games) {
      return true;
    } else {
      return false;
    }
  }

  modalJSX(){
    if(!this.modalLoading()){
      return(
        <Modal item={this.state.ticket}
               modalTitle={this.state.modalTitle}
               onChange={this.updateFormState}
               deleteButton={this.removeTicket}
               saveButton={this.createTicket}
               modalForm={TicketModalForm}

               sports={this.props.sports}
               teams={this.props.teams}
               games={this.props.games.gamesArray} />
      );
    }
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
    let loadingState  = this.props.loading.tickets;
    if(loadingState || this.props.tickets.length == 0) {
      return <RefereeLoading heightOffset="20" />;
    } else {
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
            {this.modalJSX()}
            <br />
            <List list={this.props.tickets.ticketsArray}
                  setItem={this.setTicket}

                  previewName="id" />
          </div>
      );
    }
  }
}


function mapStateToProps(state, ownProps) {
  return {
    tickets: state.tickets,
    games: state.games,
    teams: state.teams,
    sports: state.sports,
    venues: state.venues,
    loading: state.loading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ticketActions: bindActionCreators(ticketActions, dispatch),
    gameActions: bindActionCreators(gameActions, dispatch),
    teamActions: bindActionCreators(teamActions, dispatch),
    sportActions: bindActionCreators(sportActions, dispatch),
    venueActions: bindActionCreators(venueActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Tickets);
