import * as types from './action-types';

const clientId = 'LLI4XBMMLXNDUXNXFRFEZTIC25RBMKTUTHNF4PJPVXRAMDIF';
const clientSecret = 'HITTKTZOV3JO3KI34OCDGBVLJJGIEDNKU5EY4TTUZIKYGNTT';

const loginRequest = () => ({ type: types.LOGIN_REQUEST });
const loginSuccess = token => ({ type: types.LOGIN_SUCCESS, token });
const loginFailure = error => ({ type: types.LOGIN_ERROR, error });

export const login = cb => {
	return async dispatch => {
		dispatch(loginRequest());
		
		try {
			const token = localStorage.getItem('token');
			if (token) {
				dispatch(loginSuccess(token));
				dispatch(getBarsGoingTo());
				cb && cb();
				return;
			}

			const authUrl = `https://foursquare.com/oauth2/authenticate?response_type=token&client_id=${clientId}&redirect_uri=http://localhost:8080`;
			window.location = authUrl;
		} catch (e) {
			console.error(e);
			dispatch(loginFailure(e));
		}
	};
};

const logoutRequest = () => ({ type: types.LOGOUT_REQUEST });
const logoutSuccess = () => ({ type: types.LOGOUT_SUCCESS });
const logoutFailure = error => ({ type: types.LOGOUT_ERROR, error });

export const logout = () => {
	return dispatch => {
		dispatch(logoutRequest());

		try {
			localStorage.setItem('token', '');
			dispatch(logoutSuccess());
		} catch (e) {
			console.error(e);
			dispatch(logoutFailure(e));
		}
	}
};

const searchUrl = `https://api.foursquare.com/v2/venues/search?client_id=${clientId}&client_secret=${clientSecret}&&v=20140806&m=foursquare&categoryId=4bf58dd8d48988d116941735`;

const searchBarsNearMeRequest = () => ({ type: types.BARS_NEAR_ME_REQUEST });
const searchBarsNearMeSuccess = bars => ({ type: types.BARS_NEAR_ME_SUCCESS, bars });
const searchBarsNearMeFailure = error => ({ type: types.BARS_NEAR_ME_ERROR, error });

export const searchBarsNearMe = ({ latitude, longitude }) => {
	return async dispatch => {
		dispatch(searchBarsNearMeRequest());
		try {
			const searchBarsNearMeUrl = `${searchUrl}&ll=${latitude},${longitude}`;
			const response = await fetch(searchBarsNearMeUrl);
			const { meta: { code }, response: { venues: bars } } = await response.json();
			if (code !== 200) {
				dispatch(searchBarsNearMeFailure('Failed to fetch data, server error occured'));
			}
			dispatch(searchBarsNearMeSuccess(bars));
		} catch (e) {
			console.error(e);
			dispatch(searchBarsNearMeFailure('Failed to fetch data, client error occured.'));
		}
	};
};

const searchBarsNearLocRequest = () => ({ type: types.BARS_NEAR_LOC_REQUEST });
const searchBarsNearLocSuccess = bars => ({ type: types.BARS_NEAR_LOC_SUCCESS, bars });
const searchBarsNearLocFailure = error => ({ type: types.BARS_NEAR_LOC_ERROR, error });

export const searchBarsNearLocation = location => {
	return async dispatch => {
		dispatch(searchBarsNearLocRequest());
		try {
			const searchBarsNearLocUrl = `${searchUrl}&near=${location}`;
			const response = await fetch(searchBarsNearLocUrl);
			const { meta: { code }, response: { venues: bars } } = await response.json();
			if (code !== 200) {
				dispatch(searchBarsNearLocFailure('Failed to fetch data, server error occured'));
			}
			dispatch(searchBarsNearLocSuccess(bars));
		} catch (e) {
			console.error(e);
			dispatch(searchBarsNearLocFailure('Failed to fetch data, client error occured.'));
		}
	};
};

const goingToBarRequest = () => ({ type: types.GOING_TO_BAR_REQUEST });
const goingToBarSuccess = barId => ({ type: types.GOING_TO_BAR_SUCCESS, barId });
const goingToBarFailure = error => ({ type: types.GOING_TO_BAR_ERROR, error });

export const goingToBar = barId => {
	return async (dispatch, getState) => {
		dispatch(goingToBarRequest());
		try {
			const {auth: {token}} = getState();
			if (!token) {
				console.log('not logged in, dispatching login');
				return dispatch(login(() => {
					dispatch(goingToBar(barId));
				}));
			};

			const checkinUrl = `https://api.foursquare.com/v2/checkins/add?v=20160622&m=swarm&venueId=${barId}&oauth_token=${token}`;

			const res = await fetch(checkinUrl, {method: 'POST'});
			const {meta: {code}, response} = await res.json();
			if (code !== 200) {
				dispatch(goingToBarFailure('Server error.'));
				return;
			}
			const { checkin: {venue} } = response;
			dispatch(goingToBarSuccess(venue.id));
		} catch (e) {
			console.error(e);
			dispatch(goingToBarFailure('Error checking in to bar.'));
		}
	};
};

const notGoingToBarRequest = () => ({ type: types.NOT_GOING_TO_BAR_REQUEST });
const notGoingToBarSuccess = barId => ({ type: types.NOT_GOING_TO_BAR_SUCCESS, barId });
const notGoingToBarFailure = error => ({ type: types.NOT_GOING_TO_BAR_ERROR, error });

export const notGoingToBar = barId => {

};

const getBarsGoingToRequest = () => ({ type: types.BARS_GOING_TO_REQUEST });
const getBarsGoingToSuccess = bars => ({ type: types.BARS_GOING_TO_SUCCESS, bars });
const getBarsGoingToFailure = error => ({ type: types.BARS_GOING_TO_ERROR, error });

export const getBarsGoingTo = () => {

};
