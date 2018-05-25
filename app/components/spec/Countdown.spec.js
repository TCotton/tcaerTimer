import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

import Countdown from '../Countdown';

fdescribe('Countdown class', () => {
	let reactClass;

	beforeEach(() => {
		// why can't this be reused?
		reactClass = new Countdown;
	});

	it('should be defined', () => {
		expect(reactClass).toBeDefined();
	});

	describe('handleSetCountdown', () => {
		it('should set state to started and countdown', () => {
			// different way to using TestUtils.renderIntoDocument()
			// mock setTimeout / setInterval
		});
	});
});
