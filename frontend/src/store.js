import {createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import rootreducer from './reducers';

const middleware = [thunk];

const store = createStore(rootreducer, applyMiddleware(...middleware));

export default store;