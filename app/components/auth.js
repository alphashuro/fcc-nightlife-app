import React from 'react';

import styles from './auth.css';

const Auth = ({loggedIn, handleLogin, handleLogout}) => {
	return loggedIn ? (
		<button className={styles.login} onClick={() => handleLogout() }>Logout</button>
	) : (
		<button className={styles.login} onClick={() => handleLogin() }>Login</button>
	);
};

export default Auth;
