import axios from 'axios';
import * as actionTypes from './actionTypes';

export function loadGamesForTeam(slug, username, password){
  let url = "https://api.seatgeek.com/2/events?performers.slug=" + slug;
  let requestData = {
    "settings": {
      "auth": {
        username: username,
        password: password
      }
    },
    "url": url
  };
  return function(dispatch) {
    dispatch(requestGames(true));
    axios.get(requestData.url, requestData.settings).then((response) => {
      let data = response.data.events;
      dispatch(loadGamesSuccess(data));
      dispatch(loadGamesForTeamAfterDate(requestData, data));
    });
  };
}

export function loadGamesForTeamAfterDate(requestData, prevResponseData){
  let lastGameTime = prevResponseData[prevResponseData.length - 1].datetime_utc;
  console.log(lastGameTime);
  let url = 'https://api.seatgeek.com/2/events?datetime_utc.gt=';
  console.log(url);
  let totalUrl = url + lastGameTime
  console.log(totalUrl);
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

export function loadGamesFail(error) {

}
