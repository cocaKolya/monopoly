import {
  CREATE_GAME_SOCKET,
  START_GAME_SOCKET,
  GET_GAME_USERS_SOCKET,
  ROLL_DICE_SOCKET,
  TURN_SOCKET,
  CHECK_CARD_SOCKET,
} from '../constants/socket';

import {
  createGameSocket,
  rollDiceSocket,
  startGameSocket,
  getGameUsersSocket,
  turnSocket,
  checkCard,
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
    case GET_GAME_USERS_SOCKET:
      dispatch(getGameUsersSocket(parsedData.payload));
      break;
    case CHECK_CARD_SOCKET:
      dispatch(checkCard(parsedData.payload));
      break;
    case ROLL_DICE_SOCKET:
      dispatch(rollDiceSocket(parsedData.payload));
      break;
    case TURN_SOCKET:
      dispatch(turnSocket(parsedData.payload));
      break;

    default:
      break;
  }
};
