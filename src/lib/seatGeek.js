import axios from 'axios';
import * as firebase from '../lib/firebase';
let seatGeekAuth;



const loadCommentsFromServer = function() {
  firebase.db.ref('config/keys/seatGeek').on('value', function (snapshot) {
      seatGeekAuth = snapshot.val();
      console.log(seatGeekAuth)
      let url = "https://api.seatgeek.com/2/events?client_id=" + seatGeekAuth.clientId + "&client_secret=" + seatGeekAuth.secret;
      console.log(url)
      axios.get(url).then(function(response){
        console.log(response);
      }).catch(function(error){
        console.log(error);
      });
  });

};

export default loadCommentsFromServer;
