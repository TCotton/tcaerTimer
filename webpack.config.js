import CountdownForm from './app/components/CountdownForm'

const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
	resolve: {
		alias: {
			Main: path.resolve(__dirname, 'app/components/Main.js'),
			Nav: path.resolve(__dirname, 'app/components/Nav.js'),
			Timer: path.resolve(__dirname, 'app/components/Timer.js'),
			Countdown: path.resolve(__dirname, 'app/components/Countdown.js'),
			Clock: path.resolve(__dirname, 'app/components/Clock.js'),
			CountdownForm: path.resolve(__dirname, 'app/components/CountdownForm.js'),
		}
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: (/node_modules|bower_components/),
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
					}
				]
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: 'css-loader' // translates CSS into CommonJS
					},
					{
						loader: 'sass-loader' // compiles Sass to CSS
					}
				]
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {}
					}
				]
			}
		]
	},
	devtool: 'inline-source-map',
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css'
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		})
	]
};
