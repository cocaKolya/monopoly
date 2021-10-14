import { combineReducers } from 'redux';
import { allUsersReducer } from './allUsersReducers';
import { currentGameReducer } from './currentGameReducer';
import { diceReducer } from './diceReducer';
import { gameReducer } from './gameReducer';
import { gameUsersReducer } from './gameUsersReducers';
import { pendingUsersReducer } from './pendingUsersReducers';
import { playersPositionReducer } from './playersPositionReducers';
import { userGameReducer } from './userGameReducers';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  games: gameReducer,
  currentGame: currentGameReducer,
  userGames: userGameReducer,
  allUsers: allUsersReducer,
  gameUsers: gameUsersReducer,
  pendingUsers: pendingUsersReducer,
  dice: diceReducer,
  playersPosition: playersPositionReducer,
});
