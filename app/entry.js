import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './components/app';

const container = document.getElementById('app');

render(
	<Provider store={store}>
		<App/>
	</Provider>
, container);
