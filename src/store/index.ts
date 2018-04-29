import { applyMiddleware, createStore } from 'redux';

import rootReducer from '../reducers';
import { logger } from './middlewares';

const reduxMiddleware = applyMiddleware(
  logger
);

const store = createStore(
  rootReducer,
  reduxMiddleware
);

export default store;
