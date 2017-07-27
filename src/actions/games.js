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
    settings: auth
  };

  return function(dispatch) {
    dispatch(requestGames(true));
    axios.get(requestData.url, requestData.settings).then((response) => {
      let data = response.data.events;
      dispatch(loadGamesSuccess(data));
      //dispatch(loadGamesForTeamAfterDate(requestData, data));
    });
  };
}

export function preloadGames(requestData, prevResponseData){

}

export function loadGamesForTeamAfterDate(requestData, prevResponseData){
  let date = prevResponseData[prevResponseData.length - 1].datetime_utc.substring(0,10);
  let totalUrl = requestData.url + '?datetime_utc.gt=' + date;
  requestData.url = totalUrl;
  return function(dispatch) {
    dispatch(requestGames(true));
    axios.get(requestData.url, requestData.settings).then((response) => {
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
export function loadGamesFail(error) {

}
