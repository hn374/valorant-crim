const express = require('express');
const firebase = require('firebase');

const app = express();

app.get('/', function (req, res) {
    res.send('Hello World')
});

app.listen(3000);

// Set the configuration for your app
// TODO: Replace with your project's config object
const firebaseAPIKey = process.env.FIREBASE_API_KEY;

var config = {
    apiKey: firebaseAPIKey,
    authDomain: "valorant-crim.firebaseapp.com",
    databaseURL: "https://valorant-crim.firebaseio.com",
    storageBucket: "valorant-crim.appspot.com"
};

firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();