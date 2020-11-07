// import constant from 'lodash/constant';

export const FETCH_ITEMS_REQUESTED = 'FETCH_ITEMS_REQUESTED';
export const FETCH_ITEMS_SUCCEEDED = 'FETCH_ITEMS_SUCCEEDED';


export const fetchItemsRequested = () => ({type: FETCH_ITEMS_REQUESTED});
export const fetchItemsSucceeded = item => ({type: FETCH_ITEMS_SUCCEEDED, item});

// export const logIn = (credentials) => {
//     return (dispatch, getState, { getFirebase }) => {
//       const firebase = getFirebase();
  
//       firebase.auth().signInWithEmailAndPassword(
//         credentials.email,
//         credentials.password
//       ).then(() => {
//         dispatch({ type: 'LOGIN_SUCCESS' });
//       }).catch((err) => {
//         dispatch({ type: 'LOGIN_ERROR', err });
//       })
//     }
//   }
  
//   export const logOut = () => {
//     return (dispatch, getState, { getFirebase }) => {
//       const firebase = getFirebase();
  
//       firebase.auth().signOut().then(() => {
//         dispatch({ type: 'LOGOUT_SUCCESS' });
//       })
//     }
//   }
  
//   export const forgetOn = () => ({
//     type: 'FORGETON_SUCCESS'
//   })
  
//   export const forgetOff = () => ({
//     type: 'FORGETOFF_SUCCESS'
//   })
  
//   export const repassOn = (credential) => {
//     return (dispatch, getState, { getFirebase }) => {
//       const firebase = getFirebase();
  
//       firebase.auth().sendPasswordResetEmail(credential.email).then(() => {
//         dispatch({ type: 'REPASS_SUCCESS' })
//       }).catch((err) => {
//         dispatch({ type: 'REPASS_ERROR', err });
//       })
//     }
//   }