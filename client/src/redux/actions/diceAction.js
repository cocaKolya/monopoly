import axios from 'axios';
import { CLEAR_DICE, ROLL_DICE } from '../types/gameTypes';

export const rollDice = (dice, gamekey, userid) => async (dispatch) => {
  console.log('2');
  await axios.post('http://localhost:3001/game/dice', {
    dice,
    gamekey,
    userid,
  });

  dispatch({
    type: ROLL_DICE,
  });
};

export const clearDice = () => {
  return {
    type: CLEAR_DICE,
  };
};
