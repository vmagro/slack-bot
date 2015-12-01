module.exports = function (message, slackMetadata, callback) {
    if (message.toLowerCase().indexOf("matoma") != -1) {
		var palmTreeEmoji = ":palm_tree:"
        callback({
            text: palmTreeEmoji
        });
    }
    callback();
}
