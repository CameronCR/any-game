import axios from 'axios';
import * as actionTypes from './actionTypes';

export function loadGamesForTeam(slug, username, password){

  let settings = {
    "auth": {
      username: username,
      password: password
    }
  };
  let url = "https://api.seatgeek.com/2/events?performers.slug=" + slug;
  return function(dispatch) {
    axios.get(url, settings).then((response) => {
      let data = response.data;
      dispatch(loadGamesSuccess(data.events));
    });
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
