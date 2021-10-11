import { combineReducers } from 'redux';
import { currentGameReducer } from './currentGameReducer';
import { gameReducer } from './gameReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  games: gameReducer,
  currentGame: currentGameReducer,
});
