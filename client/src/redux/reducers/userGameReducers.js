import { GET_USER_GAMES } from '../types/gameTypes';

export const userGameReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USER_GAMES: {
      return payload;
    }

    default:
      return state;
  }
};
