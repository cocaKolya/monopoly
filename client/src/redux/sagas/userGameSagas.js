import axios from 'axios';
const { takeLatest, put, call } = require('@redux-saga/core/effects');
const { FIND_USER_GAMES, GET_USER_GAMES } = require('../types/gameTypes');
const url = process.env.REACT_APP_URL;

const findUserGames = (userid) => {
  return axios.post(`${url}/game/mygame`, { userid }).then((res) => res.data);
};

function* findUserGamesWorker(action) {
  try {
    const games = yield call(findUserGames, action.payload);
    yield put({ type: GET_USER_GAMES, payload: games });
  } catch (err) {
    yield put({ type: GET_USER_GAMES, payload: null });
  }
}

function* userGamesWatcher() {
  yield takeLatest(FIND_USER_GAMES, findUserGamesWorker);
}

export default userGamesWatcher;
