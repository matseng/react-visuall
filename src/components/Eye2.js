//Eye2.js

import React, {Component} from 'react';

class Eye2 extends Component {
  render() {
  	// console.log('in Eye2: ', this.props.path);
    return (
      <svg fill="purple" width={this.props.size} height={this.props.size} x="10px" y="10px" >
        <path d={this.props.path[0]}></path>
        <path d={this.props.path[1]}></path>
      </svg>
    )
  }
}

export default Eye2;
