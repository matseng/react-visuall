import React, {Component} from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'

import * as firebase from 'firebase';
import firebaseConfig from '../config/FirebaseConfig';

import svgPanZoom from 'svg-pan-zoom'

// import {Helmet} from "react-helmet";
import SplitPane from 'react-split-pane';

import styles from '../styles/main.css'

import { ActionCreators } from '../actions';
import Eye from './Eye';
import Eye2 from './Eye2';
import About from './About';
import LogIn from './LogIn';
import Home from './Home';
import Visuall from './Visuall';

class AppContainer extends React.Component {
  constructor(props) 
  {
    console.log('AppContainer constructor');
    super(props);
    this.props.fetchPath();

    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log("User is signed in:", user);
        props.initVisuallFromFirebaseUser(user);  // this.props is undefined bc in an anonymous function
      } else {
        console.log("User is NOT signed in.");

        // No user is signed in.
      }
    });
    // console.log(this);
    try {
      this.props.history.listen((location, action) => {
        const urlPathArray = window.location.pathname.split('/').slice(1);
        console.log('AppContiner.js, on rount change: ', this.props, urlPathArray);
      })
    } catch(err){
      console.log(err);
    }

  }

  componentDidMount() {
    console.log('AppContiner.js: ', this.props.params.filter);

    window.addEventListener('hashchange', () => {
    	console.log('AppContiner.js, componentDidMount: ', window.location.hash.substr(1));
    //   this.setState({
    //     route: window.location.hash.substr(1)
    //   })
    })
    var panZoomTiger = svgPanZoom('#demo-tiger');
    // panZoomTiger.pan({x: 50, y: 50})

    panZoomTiger.resetZoom();
    // panZoomTiger.resize(); // update SVG cached size and controls positions
    // panZoomTiger.fit();
    // panZoomTiger.center();



  }

    // <meta name="google-signin-client_id" content="547811396909-ogmv8sa55pcmo0cpt0vh1397qfh4fh52.apps.googleusercontent.com" />

  handleOnClick(urlPathArray) {
    console.log('AppContiner.js: handleOnClick', urlPathArray);
  }

  render() {

  	let Child;
    // console.log('AppContiner.js: ', this.props.params.filter);
    const urlPathArray = window.location.pathname.split('/').slice(1);
    // console.log('AppContiner.js: ', urlPathArray);

    switch (urlPathArray[0]) {
      case 'about': Child = About; break;
      case 'login': Child = LogIn; break;
      default: Child = Home;
    }

    return (
    	<div>
      <SplitPane split="vertical" minSize={50} defaultSize={500}>
        <SplitPane split="vertical" minSize={50} defaultSize={200}>
          <div>
            <h1>Visuall</h1>
            <ul>
              <li><Link to={"/home"} onClick={this.handleOnClick.bind(this, urlPathArray)} >Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/login">Log In | Sign Up</Link></li>
            </ul>
          </div>
          <div>
            <Child {...this.props} />
          </div>
       </SplitPane>

        <div style={{flex: 1, background: 'azure'}}>
          <Visuall/>
          <svg id="demo-tiger" style={{width:'100%', height: window.innerHeight}}>
            <g className="svg-pan-zoom_viewport">
              <Eye size='0' {...this.props} />
              <Eye2 size='200' {...this.props} />
            </g>
            
          </svg>
          {/* <hr/>  */}


        </div>

     </SplitPane>
	    </div>
    )
  
  }
}

AppContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

// Root.propTypes = {
//   store: PropTypes.object.isRequired
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

// Defines what state values map to props
// render method will be called upon change in props
function mapStateToProps(state) {
	// console.log(state);
  return state;
  return {
  	route: window.location.hash.substr(1),
    path: state.path,
    userInfo: state.userInfo,
    visualls: state.visualls
  }
}

// This function attaches the state and actions to AppContainer, 
// which are accessible as props.
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);