import axios from 'axios';
import { ADD_PENDING_USERS } from '../types/userTypes';

export const addPendingUsers = (key, pendingId) => async (dispatch) => {
  console.log(key, pendingId);
  const users = await axios.post('http://localhost:3001/game/pending', {
    key,
    pendingId,
  });
  console.log(users.data);
  dispatch({
    type: ADD_PENDING_USERS,
    payload: users.data,
  });
};
