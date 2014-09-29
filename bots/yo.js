var exec = require('child_process').exec;

module.exports = function(message, slackMetadata, callback) {
  if(message.indexOf('yo') === 0) {
    return {
      text: 'yo @' + slackMetadata.user_name
    };
  }
};
