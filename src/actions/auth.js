import { firebase, googleProvider } from '../firebase/firebase';

export const login = uid => {
  return {
    type: 'LOGIN',
    uid,
  };
};

export const startLogin = () => {
  return dispatch => {
    return firebase.auth().signInWithPopup(googleProvider);
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};

export const startLogout = () => {
  return dispatch => {
    return firebase.auth().signOut();
  };
};
