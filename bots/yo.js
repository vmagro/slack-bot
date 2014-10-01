var exec = require('child_process').exec;

module.exports = function(message, slackMetadata, callback) {
  if (message.indexOf('yo') === 0 && slackMetadata.user_name != 'slackbot') {
    callback({
      text: 'yo @' + slackMetadata.user_name
    });
  }
};
