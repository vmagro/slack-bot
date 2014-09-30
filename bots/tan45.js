module.exports = function(message, slackMetadata) {
  if(message.indexOf('!') != -1) {
    var newMessage = message.substring(0, message.length -1) + '!!!11tan45';
    var newMessage = newMessage.toUpperCase();
    return {
      text: newMessage
    };
  }
};
