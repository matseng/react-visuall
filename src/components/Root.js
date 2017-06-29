// Root.js

import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, Link } from 'react-router'
import AppContainer from './AppContainer'
// import App from './App'

// const Root = ({ store }) => (
// https://github.com/ReactTraining/react-router/issues/2117
class Root extends React.Component {
  render() {
    console.log('Root.js: ', window.location);

    return (
	  <Provider store={this.props.store}>
	    <Router history={browserHistory}>
	      {/* <Route path="/(:filter)" component={AppContainer} />  */}
	      <Route path="*/(:filter)" component={AppContainer} />
	    </Router>
	  </Provider>
	)
  }
}

// export default class Root extends Component {
//   render() {
//     return (
//       <Router history={createBrowserHistory()}>
//         <Route path='/' component={App}>
//           <IndexRoute component={Home} />
//           <Route path='about' component={About} />
//           <Route path='contact' component={Contact} />
//         </Route>
//       </Router>
//     );
//   }
// }

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root