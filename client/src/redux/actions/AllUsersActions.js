import axios from 'axios';
import { GET_ALL_USERS } from '../types/userTypes';

export const getAllUsers = (userid, gameid) => async (dispatch) => {
  const users = await axios.post('http://localhost:3001/game/add/users', {
    userid,
    gameid,
  });

  dispatch({
    type: GET_ALL_USERS,
    payload: users.data,
  });
};
