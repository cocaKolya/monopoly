import axios from 'axios';
const { takeLatest, put, call } = require('@redux-saga/core/effects');
const { CREATE_GAME, ADD_GAME, FIND_GAMES } = require('../types/gameTypes');
const url = process.env.REACT_APP_URL;

const findGames = () => {
  return axios.get(`${url}/game`).then((res) => res.data);
};

function* findGamesWorker(action) {
  try {
    const games = yield call(findGames, action.payload);
    yield put({ type: ADD_GAME, payload: games });
  } catch (err) {
    yield put({ type: ADD_GAME, payload: null });
  }
}

function* gamesWatcher() {

  yield takeLatest(FIND_GAMES, findGamesWorker);
}

export default gamesWatcher;
