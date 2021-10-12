import { ADD_GAME, ADD_USER_TO_GAME, GET_GAMES } from '../types/gameTypes';

export const gameReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_GAMES: {
      return payload;
    }
    case ADD_USER_TO_GAME: {
      return state;
    }

    default:
      return state;
  }
};
