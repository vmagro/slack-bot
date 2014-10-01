module.exports = function(message, slackMetadata) {
  if(message.indexOf('!') == -1) {
    var newMessage = message + "!!!1tan45";
    return {
      text: newMessage
    };
  }
};
