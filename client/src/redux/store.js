import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';

import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './reducers/rootReducer';
import rootSaga from './sagas/rootSags';
import initState from './initState';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  initState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
