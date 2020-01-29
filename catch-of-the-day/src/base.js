import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: 'AIzaSyDVZWjfOShgeGrGzz6oncuTYiMh3VVCAmU',
    authDomain: 'catch-o-the-day-8e5dd.firebaseapp.com',
    databaseURL: 'https://catch-o-the-day-8e5dd.firebaseio.com',
    projectId: 'catch-o-the-day-8e5dd',
    storageBucket: 'catch-o-the-day-8e5dd.appspot.com',
    messagingSenderId: '713549889073',
    appId: '1:713549889073:web:e3b2f76772d6473c48df10',
    measurementId: 'G-9CNCB41SL1'
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
