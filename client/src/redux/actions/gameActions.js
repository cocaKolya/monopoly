import axios from 'axios';
import {
  ADD_USER_TO_GAME,
  CREATE_GAME,
  FIND_GAMES,
  FIND_USER_GAMES,
} from '../types/gameTypes';

export const addGame = (owner) => {
  console.log('1');
  return {
    type: CREATE_GAME,
    payload: owner,
  };
};
export const getGames = (action) => {
  return {
    type: FIND_GAMES,
    payload: action,
  };
};
export const getUserGames = (userId) => {
  console.log(userId);
  return {
    type: FIND_USER_GAMES,
    payload: userId,
  };
};
export const addUserToGame = (gameid, userid) => async (dispatch) => {
  await axios.post('http://localhost:3001/game/userInGame', { gameid, userid });
  console.log(userid);
  dispatch({
    type: ADD_USER_TO_GAME,
  });
};
