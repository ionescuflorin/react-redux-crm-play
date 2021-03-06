import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import logger from 'redux-logger'

import rootReducer from './reducers/index';

const middlewares = [thunk, logger];

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
