import { GET_CARD_USER_SOCKET } from '../../constants/socket';

export const userInGameStatsReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CARD_USER_SOCKET: {
      return payload;
    }

    default:
      return state;
  }
};
