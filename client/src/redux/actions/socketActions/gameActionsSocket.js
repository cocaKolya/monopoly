import {
  CLEAR_DICE_SOCKET,
  CREATE_GAME_SOCKET,
  GET_GAME_USERS_SOCKET,
  ROLL_DICE_SOCKET,
  START_GAME_SOCKET,
  TURN_SOCKET,
} from '../../../constants/socket';

export const startGameSocket = (gameId) => {
  return {
    type: START_GAME_SOCKET,
    payload: gameId,
  };
};
export const createGameSocket = (game) => {
  return {
    type: CREATE_GAME_SOCKET,
    payload: game,
  };
};

export const getGameUsersSocket = (users) => {
  return {
    type: GET_GAME_USERS_SOCKET,
    payload: users,
  };
};

export const rollDiceSocket = (dice) => {
  return {
    type: ROLL_DICE_SOCKET,
    payload: dice,
  };
};
export const turnSocket = (turn) => {
  return {
    type: TURN_SOCKET,
    payload: turn,
  };
};
