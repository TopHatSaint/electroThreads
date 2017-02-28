// APP AND CONFIG REQUIRE //
var app = require('../server.js');
var db = app.get('db');




// // INITIALIZE FUNCTION //
module.exports = {
	run: function() {
		console.log('Initializing database');

		db.init.spreadsheet_clothes(function(err, table) {
			if (err) return console.log('Some tables failed to create', err);
			else console.log('Tables successfully initialized');
		});
	}
};
