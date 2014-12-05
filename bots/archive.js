var db = require('orchestrate')(process.env.ORCHESTRATE_TOKEN);

module.exports = function (message, slackMetadata, callback) {
    console.log(slackMetadata);
    db.put('messages', slackMetadata.timestamp.toString(), slackMetadata);
    callback();
};
