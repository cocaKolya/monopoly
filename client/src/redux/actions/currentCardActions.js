import axios from 'axios';
import { GET_CURRENT_CARD } from '../types/cardTypes';

export const getCurrentCard = (boardid) => async (dispatch) => {
  const response = await axios.post(
    'http://localhost:3001/game/currentcard',
    boardid
  );

  dispatch({
    type: GET_CURRENT_CARD,
    payload: response,
  });
};
