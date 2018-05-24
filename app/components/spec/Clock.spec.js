import Clock from '../Clock';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

describe('Clock class', () => {
	let reactClass;

	beforeEach(() => {
		// why can't this be reused?
		reactClass = new Clock;
	});

	it('should be defined', () => {
		expect(reactClass).toBeDefined();
	});

	describe('render method', () => {
		it('should render clock to output', () => {
			const clock = ReactTestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
			const $el = $(ReactDOM.findDOMNode(clock));
			const actualText = $el.find('.clock-text').text();

			expect(actualText).toBe('01:02');
		});
	});

	describe('formatSeconds method', () => {
		reactClass = new Clock;
		const seconds = 615;
		const expected = '10:15';
		const result = reactClass.formatSeconds(seconds);

		it('should format seconds correctly', () => {
			expect(result).toBe(expected);
		});

		it('should format seconds to correct type', () => {
			expect(typeof result).toBe('string');
		});
	});

	describe('formatSeconds method seconds when min/sec are less than 10', () => {
		reactClass = new Clock;
		const seconds = 61;
		const expected = '01:01';
		const result = reactClass.formatSeconds(seconds);

		it('should format seconds correctly', () => {
			expect(result).toBe(expected);
		});

		it('should format seconds to correct type', () => {
			expect(typeof result).toBe('string');
		});
	});
});
