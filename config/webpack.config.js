var path = require('path');
var webpack = require('webpack');
module.exports = {
	devtool: 'eval-source-map',
	entry: [
		'webpack-hot-middleware/client',
		path.join(__dirname, '../client/index.js')
	],
	output: {
		path: '/',
		filename: 'bundle.js',
		publicPath: '/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.OccurrenceOrderPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				include: path.join(__dirname, '../client'),
				loaders: ['react-hot-loader', 'babel-loader']
			},
			{
				test: /\.jsx$/,
				include: path.join(__dirname, '../client'),
				loaders: ['react-hot-loader', 'babel-loader']
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	}
};
