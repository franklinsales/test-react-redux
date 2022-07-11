import { takeLatest } from 'redux-saga/effects';
import { registerSaga, loginSaga } from './authenticationSaga';

import * as types from '../actions';
import { searchUserSaga } from './searchUserSaga';


export default function* watchUserAuthentication() {
  yield takeLatest(types.REGISTER_USER, registerSaga);
  yield takeLatest(types.LOGIN_USER, loginSaga);
  yield takeLatest(types.SEARCH_USER, searchUserSaga);
}