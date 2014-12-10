module.exports = function (message, slackMetadata, callback) {
    if (message.indexOf('bro sydney') != -1) {
        //append the slack timestamp so it shows the preview every time
        callback({
            text: 'http://goo.gl/QLS924?' + slackMetadata.timestamp
        });
    }
    callback();
};
