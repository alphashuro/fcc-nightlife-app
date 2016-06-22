import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './components/app';
import { login } from './redux/actions';

const container = document.getElementById('app');

if (window.location.hash) {
	const [_, access_token] = window.location.hash.split('=');
	window.location.hash = '';
	localStorage.setItem('token', access_token);
	store.dispatch(login());
}

render(
	<Provider store={store}>
		<App/>
	</Provider>
, container);
