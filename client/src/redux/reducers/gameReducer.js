import { START_GAME_SOCKET } from '../../constants/socket';
import { ADD_GAME, ADD_USER_TO_GAME, GET_GAMES } from '../types/gameTypes';

export const gameReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_GAMES: {
      return payload;
    }
    case ADD_USER_TO_GAME: {
      return state;
    }
    case START_GAME_SOCKET: {

      return state.map((el) =>
        el.id === payload ? { ...el, inprocess: true } : el
      );
    }

    default:
      return state;
  }
};
