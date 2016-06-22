import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initial-state';
import mainReducer from './reducers';

const store = createStore(
	mainReducer, 
	initialState,
  applyMiddleware(thunk)
);

export default store;
