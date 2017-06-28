//LogIn.js
import React from 'react'
import GoogleLogin from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response);
}

class LogIn extends React.Component {
	render() {
		return (	
		  <div>
		    <h2>Log In | Sign Up</h2>
                    <GoogleLogin
              clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
              // buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
            >
              {/* <FontAwesome name='google'/> */}
            <span> Login with Google</span>
        </GoogleLogin>
		  </div>
		)
	}
}
export default LogIn
