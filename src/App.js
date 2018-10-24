import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';
import Login from './Components/Login/Login';
import Seletor from './Components/Pages/PageSelector/PageSelector'

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyBn0q1tS2Zt-cGxGwUbu4YXfQIsiC9ihk0",
    authDomain: "ecommerce-e37cf.firebaseapp.com",
    databaseURL: "https://ecommerce-e37cf.firebaseio.com",
    projectId: "ecommerce-e37cf",
    storageBucket: "ecommerce-e37cf.appspot.com",
    messagingSenderId: "936475880658"
  };
  firebase.initializeApp(config);
  const database = firebase.database();

class App extends Component { 
  
  render() {
    return (
      <div className="App">

        <Login />
        <Seletor/>
      
      </div>
    );
  }
}

export default App;
