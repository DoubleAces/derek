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
			},
			{
				test: /\.css/,
				exclude: /node_modules/,
				loader: ['style-loader', 'css-loader']
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loader: ['file-loader']
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	}
};
