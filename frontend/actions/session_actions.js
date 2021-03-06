// Before we get to the reducer, let's write and export the following action creators in a new file actions/session_actions.js:
//
// login(user) (thunk action creator)
// logout() (thunk action creator)
// signup(user) (thunk action creator)
// receiveCurrentUser(currentUser) (regular action creator)
// receiveErrors(errors) (regular action creator)
// Don't forget to define and export the corresponding action types as well (e.g., export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER').
//
// logout won't accept an argument. receiveErrors will take an array. All other action creators accept a user object. On logout success dispatch receiveCurrentUser(null) to remove the current user.
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_LOGOUT_SUCCESS = 'RECEIVE_LOGOUT_SUCCESS';
import * as APIUtil from '../util/session_api_util';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

// export const receiveLogoutSuccess = () => ({
//   type: RECEIVE_LOGOUT_SUCCESS
// });

export const login = (user) => (dispatch) => (
  APIUtil.login(user).then(currentUser => dispatch(receiveCurrentUser(currentUser)))
);

export const signup = (user) => (dispatch) => (
  APIUtil.signup(user).then(currentUser => dispatch(receiveCurrentUser(currentUser)), err => dispatch(receiveErrors(err.responseJSON)))
);

export const logout = () => (dispatch) => (
  APIUtil.logout().then(logoutSuccess => dispatch(receiveCurrentUser(null)))

);


// Don't forget to define and export the corresponding action types as well (e.g., export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER').
//
// logout won't accept an argument. receiveErrors will take an array. All other action creators accept a user object. On logout success dispatch receiveCurrentUser(null) to remove the current user.
