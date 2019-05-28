import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCYSmFVUCfvVtVu1IUKPOL3WiEGdRVKzvM",
    authDomain: "juice-ascent.firebaseapp.com",
    databaseURL: "https://juice-ascent.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;