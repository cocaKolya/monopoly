import { ADD_GAME, GET_GAMES } from '../types/gameTypes';

export const gameReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_GAMES: {
      return payload;
    }
    default:
      return state;
  }
};
