import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import review from './review.reducer';
import code from './code.reducer';


const rootReducer = combineReducers({
  errors, 
  user, 
  review,
  code,
});

export default rootReducer;
