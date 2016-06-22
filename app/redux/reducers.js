import { combineReducers } from 'redux';
import * as types from './action-types';

import initialState from './initial-state';

function auth(state = initialState.auth, action) {
	switch(action.type) {
		case types.LOGIN_REQUEST:
			return {
				...state,
				fetching: true,
				error: null,
			};
		case types.LOGIN_SUCCESS:
			return {
				...state,
				fetching: false,
				loggedIn: true,
				token: action.token,
				error: null,
			};
		case types.LOGIN_ERROR:
			return {
				...state,
				fetching: false,
				loggedIn: false,
				token: null,
				error: action.error,
			};
		default:
			return state;
	}
}

function barsNearMe(state = initialState.barsNearMe, action) {
	switch(action.type) {
		case types.BARS_NEAR_LOC_REQUEST:
		case types.BARS_NEAR_ME_REQUEST:
			return {
				...state,
				fetching: true,
			};
		case types.BARS_NEAR_LOC_SUCCESS:
		case types.BARS_NEAR_ME_SUCCESS:
			return {
				...state,
				fetching: false,
				items: action.bars,
			};
		case types.BARS_NEAR_LOC_FAILURE:
		case types.BARS_NEAR_ME_FAILURE:
			return {
				...state,
				fetching: false,
				error: action.error,
			};
		default:
			return state;
	}
}

function barsGoingTo(state = initialState.barsGoingTo, action) {
	switch(action.type) {
		case types.BARS_GOING_TO_REQUEST:
			return {
				...state,
				fetching: true,
			};
		case types.BARS_GOING_TO_SUCCESS:
			return {
				...state,
				fetching: false,
				items: action.bars,
			};
		case types.BARS_GOING_TO_FAILURE:
			return {
				...state,
				fetching: false,
				error: action.error,
			};

		case types.GOING_TO_BAR_REQUEST:
			return {
				...state,
				items: [
					...state.items.filter(bar => bar.id !== action.barId),
					{ 
						id: action.barId,
						loading: true,
					},
				]
			};
		case types.GOING_TO_BAR_SUCCESS:
			return {
				...state,
				items: [
					...state.items.filter(bar => bar.id !== action.barId),
					{ 
						id: action.barId,
						loading: false,
					}
				]
			};
		case types.GOING_TO_BAR_FAILURE:
			return {
				...state,
				items: [
					...state.items.filter(bar => bar.id !== action.barId),
				]
			};

		case types.NOT_GOING_TO_BAR_REQUEST:
			return {
				...state,
				items: [
					...state.items.filter(bar => bar.id !== action.barId),
					{ 
						id: action.barId,
						loading: true,
					},
				]
			};
		case types.NOT_GOING_TO_BAR_SUCCESS:
			return {
				...state,
				items: [
					...state.items.filter(bar => bar.id !== action.barId),
				]
			};
		case types.NOT_GOING_TO_BAR_FAILURE:
			return {
				...state,
				items: [
					...state.items.filter(bar => bar.id !== action.barId),
					{ 
						id: action.barId,
						loading: false,
					},
				]
			};
		default:
			return state;
	}
}

const nightlifeApp = combineReducers({
	auth, 
	barsNearMe,
	barsGoingTo,
});

export default nightlifeApp;
