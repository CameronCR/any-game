import * as actionTypes from '../actions/actionTypes';

export default function tickets(state = [], action) {
  switch(action.type) {
    case actionTypes.REQUEST_TICKETS:
      return Object.assign({}, state, {isLoading: true});

    case actionTypes.LOAD_TICKETS_SUCCESS:
      return {ticketsArray: action.tickets, isLoading: false};

    default:
      return state;
  }
}
