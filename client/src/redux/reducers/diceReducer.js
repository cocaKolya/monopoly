import { ROLL_DICE_SOCKET } from '../../constants/socket';
import { ROLL_DICE } from '../types/gameTypes';

export const diceReducer = (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case ROLL_DICE: {
      return state;
    }
    case ROLL_DICE_SOCKET: {
      return payload;
    }
    default:
      return state;
  }
};
