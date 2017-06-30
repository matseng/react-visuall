// Visuall.js
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'


class Visuall extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('Visuall.js render:', this.props.myKey.splat);
    return (
      <div>
        <h3>{'Visuall goes here: ' + this.props.myKey.splat}</h3>
      </div>
    );
  }
}


// function mapStateToProps(state) {
//   // return state;
//   console.log('Visuall.js mapStateToProps:', state);
//   return {
//     history: state.history,
//     params: state.params
//   }
// }

// export default connect(mapStateToProps)(Visuall);

export default Visuall;