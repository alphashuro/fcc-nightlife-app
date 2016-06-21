import React from 'react';
import Search from '../containers/search';
import BarList from '../containers/bar-list';

const App = () => (
	<div>
		<h1>Plans tonight?</h1>
		<Search/>
		<BarList/>
	</div>
);

export default App;
