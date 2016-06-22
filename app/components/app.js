import React from 'react';
import Search from '../containers/search';
import BarList from '../containers/bar-list';
import Auth from '../containers/auth';

import styles from './app.css';

const App = () => (
	<div className={styles.app}>
		<h1>Plans tonight?</h1>
		<p>Enter a location and click search to find bars in that area, or click 'Use my location'.</p>
		<p>Login to get bars you have checked in to or check in to more places.</p>
		<Auth/>
		<Search/>
		<BarList/>
	</div>
);

export default App;
