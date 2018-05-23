import Main from '../Main';

describe('Main service', () => {
	let service;

	// Providers
	beforeEach(function () {
		service = Main;
	});

	describe('Authenticate', () => {
		it('should be defined', () => {
			expect(service).toBeDefined();
		});
	});
});
