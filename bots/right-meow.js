module.exports = function(message, slackMetadata, callback) {
	if (message.indexOf('right meow') != -1) {
		//append the slack timestamp so it shows the preview every time
		callback({
			text: 'http://bit.ly/bromeow?' + slackMetadata.timestamp
		});
	} else {
		callback();
	}
};
