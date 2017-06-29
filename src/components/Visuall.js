// Visuall.js
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'


class Visuall extends React.Component {

  render() {
  	console.log('Visuall.js render:', this.props);
    return (
      <div>
        <h3>Visuall goes here</h3>
      </div>
    );
  }
}


function mapStateToProps(state) {
  // return state;
  return {
    history: state.history
  }
}

export default connect(mapStateToProps)(Visuall);