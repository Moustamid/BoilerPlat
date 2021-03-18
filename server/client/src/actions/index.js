import axios from 'axios';
//-types :
import { FETCH_USER } from './types';

export const fetchUser = (req, res) => {
  return function (dispatch) {
    axios.get('/api/current_user').then((res) =>
      //* Dispatch manually the action to all our reduces ...
      dispatch({
        type: FETCH_USER,
        payload: res,
      })
    );
  };
};
