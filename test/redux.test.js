const {describe, it} = global;
import {assert} from 'chai';
import {spy, stub} from 'sinon';

import store from '../app/redux/store';
import initialState from '../app/redux/initial-state';
import * as actions from '../app/redux/actions';

describe('the redux store', () => {
	beforeEach(() => {
		global.fetch = stub();
	});
	afterEach(() => {
		global.fetch = stub();
	});
	it('should exist', () => {
		const actual = typeof store !== 'undefined';
		const expected = true;

		assert.equal(actual, expected);
	});

	it('should create the store with the initial state', () => {
		const actual = store.getState();
		const expected = initialState;

		assert.deepEqual(actual, expected);
	});

	it('should set bars on fetch bars near success', () => {
		// global.fetch.returnsWith
		store.dispatch(actions.searchBarsNearMe({ latitude: 0, longitude: 0 }));

		// const actual = 
	});
});
