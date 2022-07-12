import * as types from '../actions';

export default function(state = [], action:any) {

  console.debug("reducer loginReducer called", action)

  const response = action.response;

  switch(action.type) {
    case types.LOGIN_USER_SUCCESS:
      console.debug("reducer LOGIN_USER_SUCCESS", response)
      return { ...state, response };
    case types.LOGIN_USER_ERROR:
      console.debug("reducer LOGIN_USER_ERROR", response)
      return { ...state, response };
    default:
      console.debug("reducer default", response)
      return state;
  }
};