import axios from 'axios';
import { ADD_PENDING_USERS } from '../types/userTypes';

export const addPendingUsers = (key, pandingid) => async (dispatch) => {
  const users = await axios.post('http://localhost:3001/game/panding', {
    key,
    pandingid,
  });

  dispatch({
    type: ADD_PENDING_USERS,
    payload: users.data,
  });
};
