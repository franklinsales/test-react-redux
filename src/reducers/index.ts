import { combineReducers } from 'redux';
import register from './registerReducer';
import login from './loginReducer';
import searchUser from './searchUser';

const rootReducer = combineReducers({
  register, login, searchUser
});

export default rootReducer;