import axios from 'axios';
import { GET_ALL_CARDS, GET_CURRENT_CARD } from '../types/cardTypes';

export const getAllCards = () => async (dispatch) => {
  const response = await axios.get('http://localhost:3001/game/currentcard');

  dispatch({
    type: GET_CURRENT_CARD,
    payload: response,
  });
};
