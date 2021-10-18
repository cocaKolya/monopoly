import { ROLL_DICE_SOCKET } from '../../constants/socket';
import { CLEAR_DICE, ROLL_DICE } from '../types/gameTypes';

export const diceReducer = (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case ROLL_DICE: {
      return state;
    }
    case ROLL_DICE_SOCKET: {
      return payload;
    }
    case CLEAR_DICE: {
      return 0;
    }
    default:
      return state;
  }
};
