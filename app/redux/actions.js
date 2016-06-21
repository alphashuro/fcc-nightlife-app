import * as types from './action-types';

const loginRequest = () => ({ type: types.LOGIN_REQUEST });
const loginSuccess = token => ({ type: types.LOGIN_SUCCESS, token });
const loginFailure = error => ({ type: types.LOGIN_ERROR, error });

export const login = () => {

};

 const logoutRequest = () => ({ type: types.LOGOUT_REQUEST });
 const logoutSuccess = () => ({ type: types.LOGOUT_SUCCESS });
 const logoutFailure = error => ({ type: types.LOGOUT_ERROR, error });

export const logout = () => {

};

 const searchBarsNearMeRequest = () => ({ type: types.BARS_NEAR_ME_REQUEST });
 const searchBarsNearMeSuccess = bars => ({ type: types.BARS_NEAR_ME_SUCCESS, bars });
 const searchBarsNearMeFailure = error => ({ type: types.BARS_NEAR_ME_ERROR, error });

export const searchBarsNearMe = ({ latitude, longitude }) => {

};

 const searchBarsNearLocRequest = () => ({ type: types.BARS_NEAR_LOC_REQUEST });
 const searchBarsNearLocSuccess = bars => ({ type: types.BARS_NEAR_LOC_SUCCESS, bars });
 const searchBarsNearLocFailure = error => ({ type: types.BARS_NEAR_LOC_ERROR, error });

export const searchBarsNearLoc = location => {

};

 const goingToBarRequest = () => ({ type: types.GOING_TO_BAR_REQUEST });
 const goingToBarSuccess = barId => ({ type: types.GOING_TO_BAR_SUCCESS, barId });
 const goingToBarFailure = error => ({ type: types.GOING_TO_BAR_ERROR, error });

export const goingToBar = barId => {

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
