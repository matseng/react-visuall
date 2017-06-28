import React, {Component} from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'

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

class AppContainer extends React.Component {
  constructor(props) 
  {
    super(props);
    this.props.fetchPath();

    // this.state = {
    //   route: ''
    // };

  }

  componentDidMount() {
    // window.addEventListener('hashchange', () => {
    // 	console.log('componentDidMount: ', window.location.hash.substr(1));
    //   this.setState({
    //     route: window.location.hash.substr(1)
    //   })
    // })
    var panZoomTiger = svgPanZoom('#demo-tiger');
    console.log("componentDidMount");
  }

    // <meta name="google-signin-client_id" content="547811396909-ogmv8sa55pcmo0cpt0vh1397qfh4fh52.apps.googleusercontent.com" />


  render() {
    console.log('in AppContainer render 2', this.props.params.filter);
    console.log('in AppContainer, gapi:', window.gapi);

  	let Child

    switch (this.props.params.filter) {
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
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/login">Log In | Sign Up</Link></li>

            </ul>
          </div>
          <div>
            <Child/>
          </div>
       </SplitPane>

        <div>
          <svg id="demo-tiger">
            <g id="svg-pan-zoom_viewport">
              <Eye size='200'/>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

// Defines what state values map to props
// render method will be called upon change in props
function mapStateToProps(state) {
	console.log(state);
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