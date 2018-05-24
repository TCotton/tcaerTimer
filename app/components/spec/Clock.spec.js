import Clock from '../Clock';

fdescribe('Clock class', () => {
	let reactClass;

	beforeEach(() => {
		// why can't this be reused?
		reactClass = new Clock;
	});

	it('should be defined', () => {
		expect(reactClass).toBeDefined();
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
