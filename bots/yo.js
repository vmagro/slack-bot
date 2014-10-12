var exec = require('child_process').exec;

module.exports = function(message, slackMetadata, callback) {
  if (message.toLowerCase().indexOf('yo ') === 0 && slackMetadata.user_name != 'slackbot') {
    var atIndex = message.toLowerCase().indexOf('@');
    var returnMsg = 'yo @' + slackMetadata.user_name;
    
    if (atIndex > -1) {
      var spaceIndexAfterAt = message.toLowerCase().indexOf(' ', atIndex);
      returnMsg += ' ' + message.substring(atIndex, spaceIndexAfterAt == -1 ? undefined : spaceIndexAfterAt); 
    }

    callback({
      text: returnMsg
    });
  }
};
