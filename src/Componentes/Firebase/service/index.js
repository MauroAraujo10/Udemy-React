import firebase from 'firebase/app';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyAvgVGbJbCdWniiMntJG1_ruf6r25isp-Q",
    authDomain: "reactapp-efbe1.firebaseapp.com",
    databaseURL: "https://reactapp-efbe1.firebaseio.com",
    projectId: "reactapp-efbe1",
    storageBucket: "reactapp-efbe1.appspot.com",
    messagingSenderId: "508698159496",
    appId: "1:508698159496:web:5ad18f8050e367e33ab23d",
    measurementId: "G-VFNRZMK4V1"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;