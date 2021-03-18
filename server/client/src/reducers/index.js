import { combineReducers } from 'redux';
import authReducer from './authReducer';

//.This is our State :
export default combineReducers({
  auth: authReducer,
});
