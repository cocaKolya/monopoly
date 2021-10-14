import axios from 'axios';
import { ROLL_DICE } from '../types/gameTypes';

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
