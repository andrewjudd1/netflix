import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './app';
import { FirebaseContext } from './context/firebase';
import {seedDatabase} from './seed'

const config = {
  apiKey: "AIzaSyACrWTnLJ8AqtD1VvUe8MHoKmM_qAt_BbM",
  authDomain: "andrew-netflix.firebaseapp.com",
  projectId: "andrew-netflix",
  storageBucket: "andrew-netflix.appspot.com",
  messagingSenderId: "823150809469",
  appId: "1:823150809469:web:e6063b286c4332c37b3c14",
  measurementId: "G-C2B6N12KCQ",
};

const firebase = window.firebase.initializeApp(config);

seedDatabase(firebase)

ReactDOM.render(
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
        <GlobalStyles />
        <App />
    </FirebaseContext.Provider>, 
    document.getElementById('root')
);
