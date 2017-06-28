//LogIn.js
import React from 'react'
import GoogleLogin from 'react-google-login';
import * as firebase from 'firebase';
import firebaseConfig from '../config/FirebaseConfig';

var provider = new firebase.auth.GoogleAuthProvider();

function signInWithGoogle(){
  // See AppContainer.js for firebase initialization
  const self = this;
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    self.props.initVisuallFromFirebaseUser(user);
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log('LogIn.js: ', error);
  });
}

class LogIn extends React.Component {
  
constructor(props)
  {
    super(props);    
  }

	render() {
  console.log('HERE: ', this.props);

		return (	
		  <div>
		    <h2>Log In | Sign Up</h2>
        <button className="btn sign-in__button" onClick={signInWithGoogle.bind(this)} type="button">Google</button>
		  </div>
		)
	}
}

export default LogIn
