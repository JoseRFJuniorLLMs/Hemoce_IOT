var firebase = require('firebase')
// change lines below with your own Firebase snippets!
var config = {


  apiKey: "AIzaSyAN36l7pR-CDmUMCx0Zk9z92Shl37bvah0",
    authDomain: "hemoce-iot.firebaseapp.com",
    databaseURL: "https://hemoce-iot.firebaseio.com",
    projectId: "hemoce-iot",
    storageBucket: "hemoce-iot.appspot.com",
    messagingSenderId: "638554938479"

};
const fire = firebase.initializeApp(config);
module.exports = fire;