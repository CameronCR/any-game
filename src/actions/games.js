import axios from 'axios';
import * as firebase from '../lib/firebase';

export function loadGamesFromServer(slug, username, password){
  let settings = {
    "auth": {
      username: username,
      password: password
    }
  };
  let url = "https://api.seatgeek.com/2/events?performers.slug=" + slug;
  axios.get(url, settings).then((response) => {
    let data = response.data;
    // console.log(data)
  });
}
