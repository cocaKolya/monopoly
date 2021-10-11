import { all } from 'redux-saga/effects';
import currentGameWatcher from './currentGameSagas';
import gamesWatcher from './gamesSagas';
import userWatcher from './userSagas';
export default function* rootSaga() {
  yield all([userWatcher(), gamesWatcher(), currentGameWatcher()]);
}
