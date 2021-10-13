import { GET_GAME_USERS_SOCKET } from '../../constants/socket';
import { GET_GAME_USERS } from '../types/userTypes';

export const gameUsersReducer = (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_GAME_USERS: {
      return payload;
    }
    case GET_GAME_USERS_SOCKET: {
      return [...state, payload];
    }
    default:
      return state;
  }
};
