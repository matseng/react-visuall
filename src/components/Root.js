// Root.js

import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, Link } from 'react-router'
import AppContainer from './AppContainer'

// https://github.com/ReactTraining/react-router/issues/2117
class Root extends React.Component {
  render() {
    console.log('Root.js: ', window.location);

    return (
	  <Provider store={this.props.store}>
	    <Router history={browserHistory}>
	      {/* <Route path="/(:filter)" component={AppContainer} />  */}
	      <Route path="*" component={AppContainer} />
	    </Router>
	  </Provider>
	)
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root