import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC6HCJOXrk6pJ4UNrXcACAhCknfxWC3X8w",
    authDomain: "catch-of-the-day-tom-ploetz.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-tom-ploetz.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

//this is a named export
export { firebaseApp };

//this is a default export
export default base;