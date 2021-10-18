import axios from 'axios';
import { BUY_CARD, GET_CURRENT_CARD } from '../types/cardTypes';

export const getCurrentCard =
  (boardid, userid, gamekey) => async (dispatch) => {

    const response = await axios.post(
      'http://localhost:3001/game/currentcard',
      { boardid, userid, gamekey }
    );

    dispatch({
      type: GET_CURRENT_CARD,
      payload: response.data,
    });
  };
export const buyCard =
  (boardid, userid, gamekey) => async (dispatch) => {

    const response = await axios.post(
      'http://localhost:3001/game/cardbuy',
      { boardid, userid, gamekey }
    );

    dispatch({
      type: BUY_CARD,
      payload: response.data,
    });
  };
