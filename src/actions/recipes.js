import * as types from './types'
import * as firebase from 'firebase';
import firebaseConfig from '../config/FirebaseConfig';

export function fetchPath() {
  return (dispatch, getState) => {
    const path = ["M88.27,34.403c-5.282-5.611-12.564-9.205-19.881-11.337c-8.683-2.53-18.01-3.141-26.968-1.985  C33.174,22.144,24.9,24.6,17.933,29.255c-5.649,3.774-10.688,9.146-12.338,15.911C5.21,46.742,5.009,48.385,5,50.008  C5.09,65.526,21.373,74.643,34.624,77.74c9.038,2.112,18.502,2.273,27.629,0.643c7.996-1.428,15.867-4.436,22.315-9.443  c5.37-4.169,9.45-9.908,10.296-16.764C95.681,45.548,92.742,39.154,88.27,34.403z M89.297,51.863  c-0.001-0.06-0.089,0.583-0.119,0.733c-0.063,0.321-0.136,0.641-0.217,0.958c-0.179,0.701-0.401,1.391-0.662,2.066  c-0.006,0.016-0.049,0.12-0.087,0.214c-0.042,0.095-0.09,0.204-0.097,0.219c-0.14,0.305-0.288,0.606-0.443,0.904  c-0.347,0.666-0.731,1.312-1.145,1.938c-0.192,0.29-0.391,0.575-0.596,0.856c-0.05,0.069-0.281,0.367-0.262,0.346  c-0.025,0.031-0.05,0.063-0.075,0.094c-0.501,0.618-1.031,1.211-1.585,1.782c-0.52,0.535-1.061,1.049-1.619,1.544  c-0.286,0.253-0.576,0.501-0.87,0.743c-0.179,0.147-0.36,0.291-0.541,0.436c-0.028,0.022-0.049,0.039-0.07,0.056  c-0.029,0.02-0.063,0.045-0.107,0.076c-1.384,0.997-2.796,1.934-4.287,2.767c-3.382,1.89-6.052,2.94-9.883,4.036  c-8.1,2.317-16.322,2.795-24.914,1.746c-0.024-0.003-0.146-0.019-0.227-0.03c-0.267-0.037-0.534-0.077-0.801-0.118  c-0.486-0.075-0.971-0.156-1.454-0.242c-1.047-0.187-2.089-0.401-3.124-0.643c-1.908-0.446-3.794-0.986-5.645-1.629  c-0.85-0.295-1.686-0.62-2.523-0.949c-0.053-0.021-0.096-0.038-0.134-0.052c-0.015-0.007-0.032-0.014-0.054-0.023  c-0.201-0.086-0.402-0.174-0.602-0.263c-0.475-0.211-0.946-0.43-1.414-0.657c-1.576-0.765-3.11-1.62-4.579-2.575  c-0.669-0.435-1.315-0.9-1.962-1.366c-0.044-0.032-0.078-0.056-0.107-0.076c-0.021-0.017-0.042-0.034-0.07-0.056  c-0.121-0.097-0.242-0.192-0.362-0.29c-0.356-0.289-0.706-0.585-1.049-0.889c-1.154-1.021-2.233-2.129-3.204-3.326  c-0.077-0.095-0.508-0.672-0.086-0.102c-0.084-0.113-0.168-0.225-0.251-0.338c-0.205-0.281-0.404-0.567-0.596-0.856  c-0.414-0.626-0.798-1.272-1.145-1.938c-0.155-0.297-0.303-0.599-0.443-0.904c-0.06-0.131-0.315-0.768-0.037-0.064  c-0.049-0.123-0.099-0.246-0.147-0.369c-0.261-0.675-0.483-1.365-0.662-2.066c-0.081-0.317-0.153-0.637-0.217-0.958  c-0.039-0.196-0.116-0.736-0.118-0.704c-0.065-0.627-0.104-1.252-0.108-1.884c0.004-0.673,0.072-1.331,0.12-2  c0.001-0.003,0.001-0.005,0.002-0.009c0.03-0.161,0.055-0.323,0.086-0.483c0.068-0.354,0.146-0.705,0.235-1.054  c0.171-0.669,0.382-1.328,0.627-1.974c0.028-0.074,0.058-0.148,0.088-0.222c-0.106,0.269,0.081-0.194,0.131-0.304  c0.154-0.336,0.318-0.667,0.49-0.993c0.335-0.634,0.702-1.25,1.098-1.848c0.192-0.29,0.391-0.575,0.596-0.856  c0.083-0.113,0.168-0.225,0.251-0.338c-0.422,0.57,0.06-0.07,0.154-0.185c1.002-1.224,2.116-2.353,3.308-3.393  c0.288-0.252,0.581-0.498,0.878-0.739c0.12-0.098,0.242-0.193,0.362-0.29c0.028-0.022,0.049-0.039,0.07-0.056  c0.029-0.02,0.063-0.045,0.107-0.076c0.713-0.514,1.426-1.023,2.167-1.498c1.479-0.948,3.022-1.797,4.607-2.555  c0.391-0.187,0.785-0.369,1.182-0.545c0.16-0.071,0.321-0.141,0.481-0.211c0.06-0.026,0.106-0.047,0.144-0.063  c0.041-0.016,0.095-0.037,0.164-0.064c0.922-0.362,1.844-0.718,2.781-1.038c1.859-0.634,3.752-1.167,5.666-1.604  c4.166-0.952,7.661-1.364,12.041-1.465c2.179-0.05,4.36,0.004,6.533,0.165c1.008,0.074,2.015,0.173,3.019,0.294  c-0.011-0.001,0.601,0.08,0.593,0.077c0.147,0.021,0.293,0.042,0.44,0.064c0.584,0.087,1.167,0.183,1.748,0.287  c3.873,0.692,7.634,1.781,11.292,3.221c0.07,0.028,0.124,0.049,0.165,0.065c0.038,0.017,0.084,0.037,0.143,0.063  c0.2,0.088,0.401,0.175,0.601,0.264c0.395,0.177,0.788,0.36,1.178,0.548c0.84,0.405,1.667,0.835,2.48,1.292  c1.483,0.834,2.904,1.763,4.272,2.776c0.027,0.02,0.046,0.034,0.061,0.045c0.008,0.006,0.013,0.01,0.021,0.017  c0.151,0.121,0.302,0.241,0.452,0.363c0.325,0.266,0.645,0.538,0.96,0.816c0.613,0.543,1.205,1.11,1.772,1.702  c0.499,0.522,0.978,1.063,1.433,1.623c0.026,0.032,0.051,0.064,0.077,0.096c-0.028-0.032,0.209,0.274,0.261,0.344  c0.245,0.337,0.482,0.68,0.709,1.03c0.371,0.572,0.716,1.16,1.031,1.764c0.155,0.297,0.303,0.599,0.443,0.904  c0.056,0.121,0.108,0.244,0.163,0.365c-0.326-0.722,0.036,0.106,0.091,0.254c0.231,0.616,0.429,1.244,0.592,1.881  c0.081,0.317,0.153,0.637,0.217,0.958c0.032,0.161,0.057,0.322,0.088,0.483c0.009,0.045,0.016,0.082,0.023,0.113  c0.001,0.006,0.001,0.012,0.002,0.018C89.415,49.321,89.417,50.582,89.297,51.863z", "M62.923,46.196c-4.297,0-7.781-3.484-7.781-7.781c0-4.028,3.061-7.342,6.984-7.741c-3.513-2.209-7.67-3.488-12.126-3.488  C37.4,27.186,27.187,37.4,27.187,50C27.187,62.6,37.4,72.814,50,72.814S72.813,62.6,72.813,50c0-3.57-0.82-6.947-2.282-9.956  C69.782,43.559,66.661,46.196,62.923,46.196z"];
    dispatch({type: types.FETCH_PATH,
      path: path});
  }
}


export function fetchRecipes(ingredients) {
  return (dispatch, getState) => {
    console.log(getState);
  }
}

export function initFirebase(idToken, accessToken) {
  firebase.initializeApp(firebaseConfig);
  return (dispatch, getState) => {
    myCredential(idToken, accessToken)
      .then((user) => {
        return fetchUserInfo(user);
      })
      .then( (userInfo) => {
        return dispatch( setUserInfo(userInfo) );
      })
      .then(() => {
        return Promise.all(
          Object.keys(getState().userInfo['visualls-personal']).map( key => {
            return fetchVisuallMetadata(key)
              .then((metadata) => {
                return dispatch( setVisuallMetadata({key: key, ...metadata}));
              })
          })
        );
      })
      .then((visuallMetadata)=> {
        console.log('all visuall metadata loaded');
      })
      .catch((error) => {
        console.log('Account disabled x 2');
        console.log(error);
      })
  }
}

export function initVisuallFromFirebaseUser(firebaseUser) {
  return (dispatch, getState) => {
      return fetchUserInfo(firebaseUser)
      .then( (userInfo) => {
        return dispatch( setUserInfo(userInfo) );
      })
      .then(() => {
        return Promise.all(
          Object.keys(getState().userInfo['visualls-personal']).map( key => {
            return fetchVisuallMetadata(key)
              .then((metadata) => {
                return dispatch( setVisuallMetadata({key: key, ...metadata}));
              })
          })
        );
      })
      .then((visuallMetadata)=> {
        console.log('all visuall metadata dispatched with new state ', getState());
      })
      .catch((error) => {
        console.log('Account disabled x 2');
        console.log(error);
      })
  }
}

// export function initVisuallFromFirebaseUser(firebaseUser) {
//   return (dispatch, getState) => {
//      return dispatch(setFirebaseUser(firebaseUser))
//      .then( (userInfo) => {
//         return dispatch( setUserInfo(userInfo) );
//       })
//   }
// }

// export function setFirebaseUser(firebaseUser) {
//   return {
//     type: types.SET_FIREBASE_USER,
//     firebaseUser: firebaseUser
//   }
// }

// function fetchVisuallUserInfo(user) {
//   var ref = firebase.database().ref("version_01/users/" + user.uid);
//   return ref.once('value')
//     .then((snapshot) => {
//       console.log(snapshot.val());
//       return Promise.resolve({key: snapshot.key, ...snapshot.val()});
//     })
//     .catch((error) => {
//       return Promise.error(error);
//     });
// }


export function loadVisuall(key) {
  return {
    type: types.LOAD_VISUALL,
    key: key
  }
}

export function addRecipe() {
  return {
    type: types.ADD_RECIPE,
  }
}

export function setUserInfo(userInfo) {
  return {
    type: types.SET_USER_INFO,
    userInfo: userInfo
  }
}

export function setVisuallMetadata(metadata) {
  console.log('test setVisuallMetadata', metadata);
  return {
    type: types.SET_VISUALL_METADATA,
    metadata: {...metadata}
  }
}

function myCredential(idToken, accessToken) {
  console.log('myCredential', idToken, accessToken);
  const credential = firebase
      .auth
      .GoogleAuthProvider
      .credential(idToken, accessToken);

  return firebase
    .auth()
    .signInWithCredential(credential)
    .then((user) => {
      console.log('Account accepted');
      // loadTableRefs(user);
      return Promise.resolve(user);
    })
    .catch((error) => {
      console.log('Account disabled');
      return Promise.error(error);
    });
}

function fetchUserInfo(user) {
  var ref = firebase.database().ref("version_01/users/" + user.uid);
  return ref.once('value')
    .then((snapshot) => {
      return Promise.resolve({key: snapshot.key, ...snapshot.val()});
    })
    .catch((error) => {
      return Promise.error(error);
    });
}

function fetchVisuallMetadata(key) {
  var ref = firebase.database().ref("version_01/visualls/" + key + '/metadata');
  return ref.once('value')
    .then((snapshot) => {
      return Promise.resolve(snapshot.val());
    })
    .catch((error) => {
      return Promise.error(error);
    });
}
