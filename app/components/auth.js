import React from 'react';

const Auth = ({loggedIn, handleLogin, handleLogout}) => {
	return loggedIn ? (
		<button onClick={() => handleLogout() }>Logout</button>
	) : (
		<button onClick={() => handleLogin() }>Login</button>
	);
};

export default Auth;
