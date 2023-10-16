const app = require('./app.js');
const dotenv = require('dotenv');
const { initializeApp } = require("firebase/app");
const { getAuth } = require("firebase/auth");

dotenv.config();

const firebaseConfig = {
    apiKey: process.env.FIREAPI,
    authDomain: process.env.FIREDOMAIN,
    projectId: process.env.FIREID,
    storageBucket: process.env.FIREBUCKET,
    messagingSenderId: process.env.FIRESENDER,
    appId: process.env.FIREAPPID,
    measurementId: process.env.FIREMEASUREMENT
};

const firebaseAPP = initializeApp(firebaseConfig);
const auth = getAuth(firebaseAPP);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log("Firebase OK");
    console.log("Firebase Auth OK");
});
