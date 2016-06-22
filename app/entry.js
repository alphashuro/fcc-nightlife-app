import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './components/app';

const container = document.getElementById('app');

if (window.location.hash) {
	const [_, access_token] = window.location.hash.split('=');
	localStorage.setItem('token', access_token);
}

render(
	<Provider store={store}>
		<App/>
	</Provider>
, container);
