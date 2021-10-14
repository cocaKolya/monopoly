import axios from 'axios';
import { GET_ALL_CARDS } from '../types/cardTypes';

export const getAllCards = () => async (dispatch) => {
  const cards = await axios.get('http://localhost:3001/game/cardboard');

  const cardsObj = {};
  cardsObj.down = cards.slice(0, 9);
  cardsObj.left = cards.slice(9, 20);
  cardsObj.up = cards.slice(20, 29);
  cardsObj.right = cards.slice(29, 40);
  console.log(cardsObj);
  dispatch({
    type: GET_ALL_CARDS,
    payload: cardsObj,
  });
};
