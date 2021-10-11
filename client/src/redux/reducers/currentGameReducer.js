import { ADD_GAME } from '../types/gameTypes';

export const currentGameReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_GAME: {
      return payload;
    }
    default:
      return state;
  }
};
