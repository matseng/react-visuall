//Eye2.js

import React, {Component} from 'react';

class Eye2 extends Component {
  render() {
  	// console.log('in Eye2: ', this.props.path);
    return (
      <g fill="purple" width={this.props.size} height={this.props.size} transform="scale(.5) translate(10, 10)" >
        <path d={this.props.path[0]}></path>
        <path d={this.props.path[1]}></path>
      </g>
    )
  }
}

export default Eye2;
