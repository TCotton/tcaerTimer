module.exports = (config) => {
	config.set({
		frameworks: ['jasmine'],

		files: [
			{
				pattern: 'app/**/**/*.spec.js'
			}
		],

		preprocessors: {
			'app/**/**/*.spec.js': ['webpack']
		},

		webpack: require('./webpack.config'),

		reporters: ['dots'],

		browsers: ['ChromeHeadless'],
		logLevel: config.LOG_INFO,
		autoWatch: true,
		singleRun: true,
		concurrency: Infinity
	});
};
