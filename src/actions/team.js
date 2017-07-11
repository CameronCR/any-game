import * as actionTypes from './actionTypes';
import * as firebase from '../lib/firebase';

let ref = firebase.db.ref('teams');

export function loadSeatingChart(team) {
  let file = {};
  return function(dispatch) {
    dispatch(loadSeatingChartSuccess(file));
  };
}

export function loadSeatingChartSuccess(file) {
  let team = {};
  team['seatingChart'] = 'File Name';
  return {
    type: actionTypes.LOAD_SEATING_CHART_SUCCESS,
    team
  };
}
