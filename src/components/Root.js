// Root.js

import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, Link } from 'react-router'
import AppContainer from './AppContainer'
// import App from './App'

// const MyProductPage = (props) => {
//   return (
//     <ProductPage 
//       toggleSidebarOn={this.toggleSidebarOn.bind(this)}
//       {...props}
//     />
//   );
// }

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      {/* <Route path="/(:filter)" component={AppContainer} store={store} {...this.props}/> */}
      <Route path="/(:filter)" component={AppContainer} store={store} {...this.props}/>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root