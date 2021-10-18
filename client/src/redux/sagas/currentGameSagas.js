import axios from 'axios';
const { takeLatest, put, call } = require('@redux-saga/core/effects');
const { CREATE_GAME, ADD_GAME } = require('../types/gameTypes');
const url = process.env.REACT_APP_URL;

const createGame = (owner) => {
  return axios.post(`${url}/game/add`, { owner }).then((res) => res.data);
};

function* createGameWorker(action) {
  try {
    const game = yield call(createGame, action.payload);
    yield put({ type: ADD_GAME, payload: game });
  } catch (err) {
    yield put({ type: ADD_GAME, payload: null });
  }
}

function* currentGameWatcher() {
  yield takeLatest(CREATE_GAME, createGameWorker);
}

export default currentGameWatcher;
