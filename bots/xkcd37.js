module.exports = function (message, slackMetadata, callback) {
    if (message.indexOf('-ass') != -1) {
        var assIndex = message.indexOf('-ass');
        assIndex += 5;
        endIndex = message.indexOf(' ', assIndex);
        if (endIndex == -1)
            endIndex = message.length;
        var newMessage = 'What\'s an ass-' + message.substring(assIndex, endIndex) + '?';
        callback({
            text: newMessage
        });
    }
    callback();
};
