import * as types from '../actions';

export default function(state = [], action:any) {
  let response = action.response;

  switch(action.type) {
    case types.SEARCH_USER_SUCCESS:
      return { ...state, response };
    case types.SEARCH_USER_ERROR:
      return { ...state, response };
    default:
      return state;
  }
}