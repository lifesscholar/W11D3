import * as SessionApiUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const login = user => dispatch => SessionApiUtil.login(user)
.then( 
  loggedUser => {
    // debugger
    dispatch(receiveCurrentUser(loggedUser));
  },
  errors => {
    // debugger
    dispatch(receiveErrors(errors.responseJSON));
  }
  );

export const logout = () => dispatch => SessionApiUtil.logout()
.then(
  () => dispatch(logoutCurrentUser()),
  errors => dispatch(receiveErrors(errors.responseJSON))
  );

export const signup = user => dispatch => SessionApiUtil.signup(user)
.then(
  newUser => dispatch(receiveCurrentUser(newUser)),
  errors => dispatch(receiveErrors(errors.responseJSON))
  );
