import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

import CountdownForm from '../CountdownForm';

fdescribe('CountdownForm class', () => {
	let reactClass;

	beforeEach(() => {
		// why can't this be reused?
		reactClass = new CountdownForm;
	});

	it('should be defined', () => {
		expect(reactClass).toBeDefined();
	});

	// needs work - why won't this work???
	/**
	xdescribe('onSubmit method', () => {
		const e = {};
		e.preventDefault = () => {};
		reactClass = new CountdownForm;
		reactClass.props = {};
		spyOn(reactClass.props, 'onSetCountdown');
		reactClass.refs.seconds.value = 390;
		reactClass.onSubmit(e);

		it('should format call onSetCountdown if ', () => {
			expect(reactClass.props.onSetCountdown).toHaveBeenCalled();
		});
	});
	 **/
});
