import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import Firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCh1PIHoN-GmgK-1lf5loyNhD10YHZdbtc",
    authDomain: "grodno-routes-4729a.firebaseapp.com",
    databaseURL: "https://grodno-routes-4729a.firebaseio.com",
    projectId: "grodno-routes-4729a",
    storageBucket: "grodno-routes-4729a.appspot.com",
    messagingSenderId: "180424579112",
    appId: "1:180424579112:web:0e9fe5a5e792b6b9217d1d",
    measurementId: "G-G8PZVJXY5C"
};

Firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
