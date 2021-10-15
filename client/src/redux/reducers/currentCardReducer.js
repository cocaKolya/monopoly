import { GET_CURRENT_CARD } from '../types/cardTypes';

export const currentCardReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CURRENT_CARD: {
      return payload;
    }
    
    default:
      return state;
  }
};
