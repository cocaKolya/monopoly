import { CHECK_CARD_SOCKET } from '../../constants/socket';
import { GET_CURRENT_CARD } from '../types/cardTypes';

export const currentCardReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CURRENT_CARD: {
      return payload;
    }
    case CHECK_CARD_SOCKET: {
      return payload;
    }
    default:
      return state;
  }
};
