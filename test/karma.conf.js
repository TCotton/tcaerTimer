const webpackConfig = require('../webpack.config');

module.exports = (config) => {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],

		files: ['spec.bundle.js'],

		preprocessors: {
			'spec.bundle.js': ['webpack']
		},

		webpack: Object.assign({
			mode: 'development'
		}, webpackConfig),

		reporters: ['dots'],

		browsers: ['ChromeHeadless'],
		logLevel: config.LOG_INFO,
		autoWatch: false,
		singleRun: true,
		concurrency: Infinity,
	});
};
