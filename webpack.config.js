const webpack = require('webpack');
const htmlWebpack = require('html-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');
const { join } = require('path');

const htmlWebpackConfig = new htmlWebpack({
	template: './src/index.html',
	inject: 'body'
});

const extractTextPluginConfig = new extractTextPlugin('css/bundle.css');

const config = {
	devtool: 'source-map',
	output: {
		path: join(__dirname, 'dist'),
		filename: 'js/bundle.js'
	},
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: ['eslint-loader']
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.(scss|css)$/,
				use: extractTextPlugin.extract({
					use: [
						'css-loader',
						'sass-loader'
					],
					fallback: 'style-loader'
				}),

			},
		]
	},
	plugins: [
		htmlWebpackConfig,
		extractTextPluginConfig
	],
	resolve: {
		extensions: [
			'.js',
			'.jsx'
		]
	},
	devServer: {
		historyApiFallback: true,
		publicPath: '/'
	}
};

module.exports = config;