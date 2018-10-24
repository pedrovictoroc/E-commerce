import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBn0q1tS2Zt-cGxGwUbu4YXfQIsiC9ihk0",
    authDomain: "ecommerce-e37cf.firebaseapp.com",
    databaseURL: "https://ecommerce-e37cf.firebaseio.com",
    projectId: "ecommerce-e37cf",
    storageBucket: "ecommerce-e37cf.appspot.com",
    messagingSenderId: "936475880658"
  };
  firebase.initializeApp(config);

class App extends Component { 
  Login(){
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
    
      window.alert("Error: " + errorMessage);
  
      // ...
    });  
  }

  CreateAccount(){
    	
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
    
      window.alert("Error: " + errorMessage);

      // ...
    });
  }

  create
  
  render() {
    return (
      <div className="App">

      	<h3>Firebase Web Login</h3>
        <input type="email" placeholder="Email..." id="email_field" />
        <input type="password" placeholder ="Password..." id="password_field" />
        <button onclick="Login()"> Login to Account </button>
        <button onclick="CreateAccount()"> Create a new Account </button>
      
      </div>
    );
  }
}

export default App;
