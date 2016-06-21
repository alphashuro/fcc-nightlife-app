import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import mainReducer, { initialState } from './reducers';

const store = createStore(
	mainReducer, 
	initialState,
	compose(
    applyMiddleware(thunk),
		window.devToolsExtension && window.devToolsExtension()
	)
);

export default store;
