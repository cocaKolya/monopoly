import { SET_PLAYERS_POSITION } from '../types/gameTypes';

export const playersPositionReducer = (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_PLAYERS_POSITION: {
      return payload;
    }
    default:
      return state;
  }
};
