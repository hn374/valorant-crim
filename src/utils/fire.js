import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBJ_sAlVPF2Rdvg4MdQr03o7WKBowDgzjQ",
  authDomain: "valorant-crim.firebaseapp.com",
  databaseURL: "https://valorant-crim.firebaseio.com",
  storageBucket: "valorant-crim.appspot.com",
  messagingSenderId: "461879062957"
};

firebase.initializeApp(config);

export default firebase;