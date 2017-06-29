//Home.js
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'


class Home extends React.Component {
  
  // render() {
  //  return (  
  //    <div>
  //      <h2>Home</h2>
  //    </div>
  //  )
  // }
  render() {
    const data = this.props.visualls;
    const keys = Object.keys(data)
    var listItems = keys.map(function(key){
      return (
        <li key={key}>
          <Link to={"/home/" + key}>
            {data[key]['title']}
          </Link>
        </li>)


    });
    
    return (
      <div>
      {listItems}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    visualls: state.visualls
  }
}

// export default Home
export default connect(mapStateToProps)(Home);