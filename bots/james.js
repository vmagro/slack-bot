module.exports = function(message, slackMetadata, callback) {
	if (message.indexOf('darth james') != -1) {
		//append the slack timestamp so it shows the preview every time
		callback({
			text: 'http://bot.vinnie.io/james?' + slackMetadata.timestamp
		});
	} else {
		callback();
	}
};
