import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import reviewSaga from './review.saga';
import codeSaga from './code.saga';


export default function* rootSaga() {
  yield all([
    loginSaga(), 
    registrationSaga(),
    userSaga(),
    reviewSaga(),
    codeSaga(),
  ]);
}
