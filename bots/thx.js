module.exports = function(message, slackMetadata, callback) {
	if (message.indexOf('thx') != -1) {
		//append the slack timestamp so it shows the preview every time
		callback({
			rewrite: true,
			text: 'http://i.ytimg.com/vi/FWkJ86JqlPA/hqdefault.jpg?' + slackMetadata.timestamp
		});
	} else {
		callback();
	}
};
