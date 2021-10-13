import { CREATE_GAME_SOCKET, START_GAME_SOCKET } from '../constants/socket';
import {
  createGameSocket,
  startGameSocket,
} from '../redux/actions/socketActions/gameActionsSocket';

export const createSocketOnMessage = (dispatch) => (event) => {
  const parsedData = JSON.parse(event.data);

  switch (parsedData.type) {
    case START_GAME_SOCKET:
      dispatch(startGameSocket(parsedData.payload));
      break;
    case CREATE_GAME_SOCKET:
      dispatch(createGameSocket(parsedData.payload));
      break;

    default:
      break;
  }
};
