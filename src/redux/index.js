import {
  createStore, combineReducers, compose, applyMiddleware,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '../sagas';

import { crudCharacters } from './Characters'

export const reducers = combineReducers({
  crudCharacters,
});

export function createAppStore() {
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  );

  sagaMiddleware.run(rootSaga);

  return { store };
}
