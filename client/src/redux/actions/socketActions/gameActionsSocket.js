import { CREATE_GAME_SOCKET, GET_GAME_USERS_SOCKET, START_GAME_SOCKET } from "../../../constants/socket";

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
