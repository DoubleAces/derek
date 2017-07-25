const MongoClient = require('mongodb').MongoClient;
let state = {
	db: null,
};

function connect(url) {
	if (state.db) {
		return;
	}
	
	MongoClient.connect(url, function(err, db) {
		if (err) {
			throw new Error(err);
		}
		console.log('Database connection established');
		state.db = db;
	});
}

function get() {
	return state.db;
}

function insert(collection, data) {
	let dbCol = state.db.collection(collection);
	dbCol.insertOne(data, function (err, result) {
		if (err) {
			throw new Error(err);
		}
		console.log(result.ops);
	});
}

module.exports = {
	connect,
	get,
	insert
}