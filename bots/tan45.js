module.exports = function(message, slackMetadata, callback) {
	if (message.indexOf('!') == message.length - 1) {
		var newMessage = message.substring(0, message.length - 1) + '!!!11tan45';
		var newMessage = newMessage.toUpperCase();
		callback({
			text: newMessage
		});
	} else {
		callback();
	}
};
