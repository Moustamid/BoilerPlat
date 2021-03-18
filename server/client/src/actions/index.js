import axios from 'axios';
//-types :
import { FETCH_USER } from './types';

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/current_user');

  //* Dispatch manually the action to all our reduces ...
  dispatch({
    type: FETCH_USER,
    payload: res.data,
  });
};
