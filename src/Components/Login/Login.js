import React, {Component} from 'react';
import firebase from 'firebase';
class Login extends Component{    

    state = {
        userEmail: '',
        userPass: '',
        isLogged: false
    }

    componentDidMount(){
      firebase.auth().onAuthStateChanged((user)=>{

        if(user){
          console.log("SETEI!");  
          this.setState({
            isLogged: true
          })
        }
        else{
          this.setState({
            isLogged: false
          })
        }
      });
  }

    signOut = () => {
      firebase.auth().signOut();
    }

    login = () => {

        firebase.auth().signInWithEmailAndPassword(this.state.userEmail, this.state.userPass).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;

          var errorMessage = error.message;
        
          window.alert("Error: " + errorMessage);
          // ...
        
        });  
      }
    

    createAccount = () => {
    
        firebase.auth().createUserWithEmailAndPassword(this.state.userEmail, this.state.userPass).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
        
          window.alert("Error: " + errorMessage);
    
          // ...
        });
      }    
    
    loginHandler = (field, e) => {

        let tempState = {...this.state}

        tempState[field] = e.target.value;

        this.setState(tempState);
    }


      render(){
        return (
            <div>
    
                <h3>Firebase Web Login</h3>
                <input type="email" placeholder="Email..." id="email_field" onChange={(e)=>{this.loginHandler('userEmail', e)}}/>
                <input type="password" placeholder ="Password..." id="password_field" onChange={(e) => {this.loginHandler('userPass', e)}} />
                <button onClick={this.login}> Login to Account </button>
                <button onClick={this.createAccount}> Create a new Account </button>    
                <button onClick={this.signOut}>Log Out</button>
            </div>
    
        );
      }
        

}

export default Login;