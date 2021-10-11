import { CREATE_GAME, FIND_GAMES, FIND_USER_GAMES } from '../types/gameTypes';

export const addGame = (owner) => {
  return {
    type: CREATE_GAME,
    payload: owner,
  };
};
export const getGames = () => {
  return {
    type: FIND_GAMES,
    payload: [],
  };
};
export const getUserGames = () => {
  return {
    type: FIND_USER_GAMES,
    payload: [],
  };
};
