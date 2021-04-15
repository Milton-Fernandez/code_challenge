import axios from 'axios';
import { put, takeLatest,takeEvery } from 'redux-saga/effects';


function* fetchReviewSaga(action){
    try{
        let response = yield axios.get(`/api/review/${action.payload}`);
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

function* removeReviewSaga(action) {
    try {
        yield axios.delete(`/api/review/delete/${action.payload}`);
        yield put({ type: 'FETCH_REVIEW' });
    } catch (error) {
        console.log('Error in delete', error);
    };
};
function* updateReviewSaga(action){
    try{
        console.log(action.payload);
        yield axios.put(`/api/review/update/${action.payload.id}`, action.payload)
        yield put({ type: 'FETCH_REVIEW'});
       
    
    }  catch(error){
        console.log('error updating data',error);
    }
}

function* reviewSaga() {
    yield takeEvery('FETCH_REVIEW', fetchReviewSaga);
    yield takeEvery('ADD_REVIEW', addReviewSaga);
    yield takeEvery('REMOVE_REVIEW', removeReviewSaga);
    yield takeEvery('UPDATE_REVIEW',updateReviewSaga)
}


export default reviewSaga;