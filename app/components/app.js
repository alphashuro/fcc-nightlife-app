import React from 'react';
import Search from '../containers/search';
import BarList from '../containers/bar-list';
import Auth from '../containers/auth';

const App = () => (
	<div>
		<h1>Plans tonight?</h1>
		<Auth/>
		<Search/>
		<BarList/>
	</div>
);

export default App;
