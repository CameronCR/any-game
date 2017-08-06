import axios from 'axios';

import * as firebase from '../lib/firebase';
import { nextDay } from '../lib/utilities';
import * as actionTypes from './actionTypes';

import * as loadingActions from './loading';

const ref = firebase.db.ref('games');

//Utility
function sortGamesByDayAndDispatch(snapshot, dispatch, slug){
  let games = [];
  snapshot.forEach(function(child) {
    games.push(child.val());
  });
  dispatch(loadGamesSuccess(games));
}

function cleanUpGame(game) {
  delete game.announce_date;
  delete game.created_at;
  delete game.date_tbd;
  delete game.datetime_rbd;
  delete game.is_open;
  delete game.time_tbd;
  delete game.url;
  delete game.visible_until_utc;

  let gameVenue = game.venue;
  delete gameVenue.url;
  gameVenue.name = gameVenue.name_v2;
  delete gameVenue.name_v2;
  delete gameVenue.has_upcoming_events;

  game.performers.map((team) => {
    delete team.url;
    delete team.stats;
    delete team.primary;
    delete team.num_upcoming_events;
  });

  return game;
}

//Actions
export function loadGamesFromServer(settings, slug){
  let auth = {
    username: settings.clientId,
    password: settings.secret
  };
  let url = "https://api.seatgeek.com/2/events?per_page=200&";
  url = url + "performers.slug=" + slug;
  let requestData = {
    url: url,
    settings: {auth}
  };

  return function(dispatch) {
    dispatch(loadingActions.isLoading('games'));
    axios.get(requestData.url, requestData.settings).then((response) => {
      let data = response.data.events;
      dispatch(loadGamesSuccess(data));
      dispatch(loadingActions.notLoading('games'));
    });
  };
}

export function loadGames(onlyFuture){
  return function(dispatch) {
    dispatch(loadingActions.isLoading('games'));
    if(onlyFuture) {
      let now = new Date();
      let startAt = now.toISOString();
      ref.orderByChild('datetime_local').startAt(startAt).on('value', function(snapshot) {
        sortGamesByDayAndDispatch(snapshot, dispatch);
        dispatch(loadingActions.notLoading('games'));
      });
    } else {
      ref.orderByChild('datetime_local').on('value', function(snapshot) {
        sortGamesByDayAndDispatch(snapshot, dispatch);
        dispatch(loadingActions.notLoading('games'));
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
  cleanUpGame(game);
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
          //dispatch(createGameSuccess(false));
        } else {
          window.alert('Loaded');
          //dispatch(createGameSuccess(true));
        }
      });
    });
  };
}

//To Reducers
export function loadGamesSuccess(games) {
  return {
    type: actionTypes.LOAD_GAMES_SUCCESS,
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
