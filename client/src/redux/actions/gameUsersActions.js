import axios from 'axios';
import { GET_GAME_USERS } from '../types/userTypes';

export const getGameUsers = (key) => async (dispatch) => {
  const { data } = await axios.post('http://localhost:3001/game/users', {
    key,
  });
  let users = [];
  if (data.length >= 4) {
    users = data.slice(0, 4);
  } else {
    users = data;
  }

  dispatch({
    type: GET_GAME_USERS,
    payload: users,
  });
};
