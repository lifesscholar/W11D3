import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from "../actions/session_actions";


const sessionErrorReducer = (state={}, action) => {
  Object.freeze(state);
  debugger
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return Object.assign({}, state, [action.errors]);
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
}

export default sessionErrorReducer;