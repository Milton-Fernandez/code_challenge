import axios from 'axios';
import { put, takeLatest,takeEvery } from 'redux-saga/effects';


function* fetchCodeSaga(action){
    try{
        let response = yield axios.get(`/api/code`);
        yield put({type:'SET_CODE',payload:response.data});
       
    }catch (error){
        console.log('ERROR in fetch', error);
    };
};


function* codeSaga() {
    yield takeEvery('FETCH_CODE', fetchCodeSaga);
}


export default codeSaga;