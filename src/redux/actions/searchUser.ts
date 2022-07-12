import SearchUser from '../../types/SearchUser/SearchUser';
import * as types from './index';

export const searchUserAction = (searchUser:SearchUser) => {
  return {
    type: types.SEARCH_USER,
    searchUser
  }
};