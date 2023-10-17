const { initializeApp } = require("firebase/app");
const firebase = require("firebase-admin");
const credentials  = require("../firebase/accountKey.json")
const dotenv = require('dotenv');
dotenv.config();

firebase.initializeApp({
    credential: firebase.credential.cert(credentials),
    databaseURL: process.env.FIREDATABASE
})

module.exports = firebase;

