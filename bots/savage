module.exports = function(message, slackMetadata, callback) {
	if (message.indexOf('savage') != -1) {
		//append the slack timestamp so it shows the preview every time
		callback({
			rewrite: true,
			text: 'S A V A G E\nA V A G E S\nV A G E S A\nA G E S A V\nG E S A V A\nE S A V A G\n'
		});
	} else {
		callback();
	}
};
