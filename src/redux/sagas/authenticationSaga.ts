import { put, call } from 'redux-saga/effects';
import { registerUserService, loginUserService } from '../../services/User';

import * as types from '../actions'

export function* registerSaga(payload:any): any {
  try {
    const response = yield call(registerUserService, payload);
    yield put({ type: types.REGISTER_USER_SUCCESS, response })
  } catch(error) {
    yield put({ type: types.REGISTER_USER_ERROR, error });
  }
}

export function* loginSaga(payload:any): any {
  console.debug("loginSaga(payload:any) called", payload)
  try {
    const response = yield call(loginUserService, payload);
    console.debug("loginSaga response", response)
    if(response.error){
      yield put({ type: types.LOGIN_USER_ERROR, response })
    }
    console.debug("yield", "LOGIN_USER_SUCCESS")
    yield put({ type: types.LOGIN_USER_SUCCESS, response })
    ;
  } catch(error) {
    yield put({ type: types.LOGIN_USER_ERROR, error })
  }
}