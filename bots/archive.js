//var db = require('orchestrate')(process.env.ORCHESTRATE_TOKEN)

module.exports = function(message, slackMetadata, callback) {
    console.log(process.env.ORCHESTRATE_TOKEN);
    db.put('messages', slackMetadata.timestamp, slackMetadata);
};
