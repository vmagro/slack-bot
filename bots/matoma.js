module.exports = function(message, slackMetadata, callback) {
	if (message.toLowerCase().indexOf("matoma") != -1) {
		var msg = ":palm_tree: _Spread the love_ :palm_tree:";
		callback({
			text: msg
		});
	} else {
		callback();
	}
}
