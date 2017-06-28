// import React from 'react'
import { render } from 'react-dom'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import App from './components/App'
// import reducer from './reducers'

// const store = createStore(reducer)

// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )


import React, { Component } from 'react';
// import {Provider} from 'react-redux';
import { createStore, applyMiddleware, combineReduxers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';


import reducer from './reducers';
import Root from './components/Root';


function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(thunkMiddleware)
    );
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

// render(
//   <Provider store={store}>
//     <AppContainer />
//   </Provider>,
//   document.getElementById('root')
// )

render(
  <div>
    <script src="https://apis.google.com/js/platform.js" async defer></script>
    <meta name="google-signin-client_id" content="547811396909-ogmv8sa55pcmo0cpt0vh1397qfh4fh52.apps.googleusercontent.com" />
    <Root store={store} />
  </div>
  , document.getElementById('root')
)

// class App extends React.Component {
//   render() {
//     console.log('Here in index.js');
//     return (
//       <Provider store = {store}>
//         <AppContainer/>
//       </Provider>,
//       document.getElementById('root')
//     );
//   }
// }
