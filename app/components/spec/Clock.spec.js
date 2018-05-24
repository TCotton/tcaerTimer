import Clock from '../Clock';

describe('Clock class', () => {
	let reactClass;

	// Providers
	beforeEach(function () {
		reactClass = Clock;
	});

	it('should be defined', () => {
		expect(reactClass).toBeDefined();
	});
});
