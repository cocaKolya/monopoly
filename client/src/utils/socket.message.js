import { START_GAME_SOCKET } from '../constants/socket';
import { startGameSocket } from '../redux/actions/gameActions';

export const createSocketOnMessage = (dispatch) => (event) => {

  const parsedData = JSON.parse(event.data);

  switch (parsedData.type) {
    case START_GAME_SOCKET:
      dispatch(startGameSocket(parsedData.payload));
      break;

    default:
      break;
  }
};
