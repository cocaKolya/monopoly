import axios from 'axios';
import { GET_GAME_USERS } from '../types/userTypes';

export const getGameUsers = (key) => async (dispatch) => {
  const users = await axios.post('http://localhost:3001/game/users', {
    key,
  });
  console.log(users.data);
  dispatch({
    type: GET_GAME_USERS,
    payload: users.data,
  });
};
