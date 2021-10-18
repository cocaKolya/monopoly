import { TURN_SOCKET } from '../../constants/socket';
import { NEXT_TURN } from '../types/gameTypes';

export const turnReducer = (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case TURN_SOCKET: {
      return payload;
    }
    case NEXT_TURN: {
      return state;
    }
    default:
      return state;
  }
};
