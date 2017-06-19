let express = require('express');
let path = require('path');
let webpack = require('webpack');
let webpackMiddleware = require('webpack-dev-middleware');
let webpackHotMiddleware = require('webpack-hot-middleware');
let webpackConfig = require('../config/webpack.config');
let socket = require('socket.io');
let db = require('./db');

let app = express();
const compiler = webpack(webpackConfig);
app.use(webpackMiddleware(compiler, {
	hot: true,
	publicPath: webpackConfig.output.publicPath,
	noInfo: true
}));

app.use(webpackHotMiddleware(compiler));
app.get('/', (req, res) => {
	res.set({
		'Content-Type': 'text/html'
	});
	res.sendFile(path.join(__dirname, './index.html'));
});

db.connect('mongodb://localhost:27017/derek');
let server = app.listen(3000, () => console.log('Running on localhost:3000'));
let io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket) {
	console.log('New IO connection: ', socket.id);
	socket.on('save', function(data) {
		db.insert(data.model, data.data);
		console.log('Received message from client: ', data.model);
	});
}