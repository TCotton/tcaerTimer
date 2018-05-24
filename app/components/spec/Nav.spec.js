import Main from '../Main';

describe('Main class', () => {
	let reactClass;

	// Providers
	beforeEach(function () {
		reactClass = Main;
	});

	it('should be defined', () => {
		expect(reactClass).toBeDefined();
	});
});
