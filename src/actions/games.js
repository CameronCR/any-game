import axios from 'axios';
import * as actionTypes from './actionTypes';

export function loadGames(settings, slug){
  let auth = {
    username: settings.clientId,
    password: settings.secret
  };

  let url = "https://api.seatgeek.com/2/events?";
  if(slug) {
    url = url + "performers.slug=" + slug;
  }
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

export function loadGamesForTeamAfterDate(settings, prevResponseData){
  let authSettings = {
    auth: {
      username: settings.clientId,
      password: settings.secret
    }
  };
  let lastRecord = prevResponseData.gamesArray[prevResponseData.gamesArray.length - 1];
  let date = lastRecord.datetime_utc.substring(0,10);
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
export function loadGamesFail(error) {

}
