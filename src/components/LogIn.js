//LogIn.js
import React from 'react'
import GoogleLogin from 'react-google-login';
import * as firebase from 'firebase';
import firebaseConfig from '../config/FirebaseConfig';



var provider = new firebase.auth.GoogleAuthProvider();

function responseGoogle(response) {
  console.log(response);
  console.log('myCredential', response.Zi.id_token, response.Zi.id_token);

  this.props.initFirebase(response.Zi.id_token, response.Zi.access_token);
}

function signInWithGoogle(){
  firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
}

class LogIn extends React.Component {
  
constructor(props)
  {
    firebase.initializeApp(firebaseConfig);
    super(props);
    // this.props.initFirebase(this.props['idToken'], this.props['accessToken']);
    // this.handleOnRowPress = this.handleOnRowPress.bind(this);
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log("User is signed in:", user, props);
        props.initVisuallFromFirebaseUser(user);
      } else {
        console.log("User is NOT signed in.");

        // No user is signed in.
      }
});
    
  }

	render() {
  // console.log('HERE: ', this.props);

		return (	
		  <div>
		    <h2>Log In | Sign Up</h2>
        <button className="btn sign-in__button" onClick={signInWithGoogle} type="button">Google</button>
		  </div>
		)
	}
}

export default LogIn
