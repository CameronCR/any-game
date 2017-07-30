import axios from 'axios';
import * as firebase from '../lib/firebase';
import * as actionTypes from './actionTypes';
import { nextDay } from '../lib/utilities';

const ref = firebase.db.ref('games');

//Utility
function sortGamesByDayAndDispatch(snapshot, dispatch){
  let games = [];
  snapshot.forEach(function(child) {
    games.push(child.val());
  });
  dispatch(loadGamesSuccess(games));
}

//Actions
export function loadGamesFromServer(settings, slug){
  let auth = {
    username: settings.clientId,
    password: settings.secret
  };
  let url = "https://api.seatgeek.com/2/events?";
  url = url + "performers.slug=" + slug;
  let requestData = {
    url: url,
    settings: {auth}
  };

  return function(dispatch) {
    dispatch(requestGames(true));
    axios.get(requestData.url, requestData.settings).then((response) => {
      let data = response.data.events;
      dispatch(loadGamesSuccess(data, slug));
    });
  };
}

export function loadGames(onlyFuture){
  return function(dispatch) {
    if(onlyFuture) {
      let now = new Date();
      let startAt = now.toISOString();
      ref.orderByChild('datetime_local').startAt(startAt).on('value', function(snapshot) {
        sortGamesByDayAndDispatch(snapshot, dispatch);
      });
    } else {
      ref.orderByChild('datetime_local').on('value', function(snapshot) {
        sortGamesByDayAndDispatch(snapshot, dispatch);
      });
    }
  };
}

export function clearLoaded(){
  return function(dispatch) {
    let arr = [];
    dispatch(loadGamesSuccess(arr));
  };
}

export function loadGamesForTeamAfterDate(settings, prevResponseData){
  let authSettings = {
    auth: {
      username: settings.clientId,
      password: settings.secret
    }
  };
  let lastRecord = prevResponseData.gamesArray[prevResponseData.gamesArray.length - 1];
  let date = nextDay(lastRecord.datetime_utc.substring(0,10));
  let url = 'https://api.seatgeek.com/2/events?';
  let teams = lastRecord.performers;
  let slug = prevResponseData.team;
  url = url + 'performers.slug=' + slug;
  url = url + '&datetime_utc.gt=' + date;
  return function(dispatch) {
    axios.get(url, authSettings).then((response) => {
      let data = response.data.events;
      dispatch(addGamesSuccess(data));
    });
  };
}

export function saveGame(game){
  let postKey;
  return function(dispatch) {
    ref.orderByChild('id').equalTo(game.id).once('value', function(snapshot) {
      let exists = (snapshot.val() !== null);
      if(exists) {
        postKey = Object.keys(snapshot.val())[0];
      } else {
        postKey = ref.push().key;
      }
      firebase.db.ref('games/' + postKey).update(game, function(error) {
        if (error) {
          dispatch(createGameSuccess(false));
        } else {
          dispatch(createGameSuccess(true));
        }
      });
    });
  };
}

//To Reducers
export function requestGames(status) {
  return {
    type: actionTypes.REQUEST_GAMES,
    status
  };
}

export function loadGamesSuccess(games, slug) {
  return {
    type: actionTypes.LOAD_GAMES_SUCCESS,
    team: slug,
    games
  };
}

export function addGamesSuccess(games) {
  return {
    type: actionTypes.ADD_GAMES_SUCCESS,
    games
  };
}

export function createGameSuccess(status) {
  return {
    type: actionTypes.CREATE_GAME_SUCCESS,
    status
  };
}
