import { clearCart } from "./cart.actions";
import {all, call, takeLatest, put} from 'redux-saga/effects';
import UserActionTypes from "../user/user.types";



export function* clearCartOnSignoutSuccess(){
    yield put(clearCart());
}

export function* onSignoutSuccess(){
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignoutSuccess);
}


export function* cartSagas() {
    yield all([call(onSignoutSuccess)]);
}