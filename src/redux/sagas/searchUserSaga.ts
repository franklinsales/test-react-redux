import { put, call } from 'redux-saga/effects';
import { searchUsers } from '../../services/User';

import * as types from '../actions'

export function* searchUserSaga(payload:any): any {
  try {
    const response = yield call(searchUsers, payload);
    yield put({ type: types.SEARCH_USER_SUCCESS, response })
  } catch(error) {
    yield put({ type: types.SEARCH_USER_ERROR, error });
  }
}