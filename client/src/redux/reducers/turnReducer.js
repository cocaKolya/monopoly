import { TURN_SOCKET } from '../../constants/socket';

export const turnReducer = (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case TURN_SOCKET: {
      return payload;
    }
    default:
      return state;
  }
};
