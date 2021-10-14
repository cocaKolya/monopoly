import { combineReducers } from 'redux';
import { allCardsReducer } from './allCardsReducer';
import { allUsersReducer } from './allUsersReducers';
import { currentGameReducer } from './currentGameReducer';
import { diceReducer } from './diceReducer';
import { gameReducer } from './gameReducer';
import { gameUsersReducer } from './gameUsersReducers';
import { pendingUsersReducer } from './pendingUsersReducers';
import { turnReducer } from './turnReducer';
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
  turn: turnReducer,
  allCards: allCardsReducer,
});
