import User from '../../types/User/User';
import * as types from './index';

export const registerUserAction = (user:any) => {
  return {
    type: types.REGISTER_USER,
    user
  }
};

export const loginUserAction = (user:User) => {
  return {
    type: types.LOGIN_USER,
    user
  }
};