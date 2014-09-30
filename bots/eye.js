module.exports = function(message, slackMetadata) {
  if(message.indexOf('i') == 0) {
    var newMessage = 'eye' + message.substring(1);
    return {
      text: newMessage
    };
  }
};
