var AsciiTable = require('ascii-table')

if (process.env.ORCHESTRATE_TOKEN) {
	var db = require('orchestrate')(process.env.ORCHESTRATE_TOKEN);

	module.exports = function (message, slackMetadata, callback) {
		if (message.indexOf('leaderboard') == 0) {
			db.list('points')
			.then(function (result) {
				var items = result.body.results;
				var table = new AsciiTable('A Title')
				table
					.setHeading('', 'Name', 'Age');
				for (var i=0; i<items.length; i++) {
					var thing = items[i].path.key;
					var points = items[i].value.point;
					table.addRow(i, thing, points);
				}
				callback({
					text: table.toString()
				});
			});
		}
		if (message.indexOf('++') !== -1) {
			var thing = findThing(message, '++');
			if (thing == slackMetadata.user_name) {
				callback({
					text: "voting for yourself, really?"
				});
			} else {
				applyPoint(thing, 1, function (val) {
					var text = thing + ' has ' + val + ' point';
					if (val !== 1) {
						text += 's';
					}
					callback({
						text: text
					});
				});
			}
		}
		if (message.indexOf('--') !== -1) {
			var thing = findThing(message, '--');
			applyPoint(thing, -1, function (val) {
				callback({
					text: thing + ' has ' + val + ' points'
				});
			});
		}

		if (message.indexOf('++') === -1 && message.indexOf('--') === -1) {
			callback();
		}

	};

	function applyPoint(thing, val, cb) {
		//this code is really gross but it gets the job done
		db.get('points', thing)
			.then(function (res) {
				var pointsObj = res.body;
				if (pointsObj) {
					console.log(pointsObj);
					db.put('points', thing, {
						point: pointsObj.point + val
					});
					cb(pointsObj.point + val);
				} else {
					db.put('points', thing, {
						point: val
					});
					cb(val);
				}
			})
			.fail(function (err) {
				db.put('points', thing, {
					point: val
				});
				cb(val);
			});
	}

	function findThing(message, token) {
		var tokenIndex = message.indexOf(token);
		var startIndex = message.lastIndexOf(' ', tokenIndex);
		if (startIndex !== -1) {
			startIndex++;
		}
		return message.substring(startIndex, tokenIndex);
	}
} else {
	module.exports = function (message, slackMetadata, callback) {
		console.log('skipping points bot in dev');
		callback();
	}
}
