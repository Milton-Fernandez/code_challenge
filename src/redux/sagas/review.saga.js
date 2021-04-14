import axios from 'axios';
import { put, takeLatest,takeEvery } from 'redux-saga/effects';


function* fetchReviewSaga(action){
    try{
        let response = yield axios.get('/api/review');
        yield put({type:'SET_REVIEW',payload:response.data});
       
    }catch (error){
        console.log('ERROR in fetch', error);
    };
};

function* addReviewSaga(action) {
    try {
        yield axios.post('/api/review/add', action.payload);
        yield put({ type: 'FETCH_REVIEW' });
    } catch (error) {
        console.log('Error in add', error);
    };
};

function* reviewSaga() {
    yield takeEvery('FETCH_REVIEW', fetchReviewSaga);
    yield takeEvery('ADD_REVIEW', addReviewSaga);
}

export default reviewSaga;