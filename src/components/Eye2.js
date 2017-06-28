//Eye2.js

import React, {Component} from 'react';

class Eye2 extends Component {
  render() {
  	// console.log('in Eye2: ', this.props.path);
    return (
      <svg width={this.props.size} height={this.props.size} x="0px" y="0px" viewBox="0 0 100 100"><path d={this.props.path[0]}></path><path d={this.props.path[1]}></path></svg>
    )
  }
}

export default Eye2;
