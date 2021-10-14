import { GET_ALL_CARDS } from '../types/cardTypes';

export const allCardsReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_CARDS: {
      return payload;
    }
    default:
      return state;
  }
};
