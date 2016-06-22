import { connect } from 'react-redux';
import Auth from '../components/auth';

import { login, logout } from '../redux/actions';

export default connect(
	({auth}) => ({
		loggedIn: auth.token
	}),
	dispatch => ({
		handleLogin: () => {
			dispatch(login());
		},
		handleLogout: () => {
			dispatch(logout());
		},
	})
)(Auth);
