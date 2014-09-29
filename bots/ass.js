module.exports = function(slackMetadata) {
  var message = slackMetadata.text;
  if(message.indexOf('-ass') != -1) {
    var assIndex = message.indexOf('-ass');
    var newMessage = message.substring(0, assIndex) + ' ass-' + message.substring(assIndex + 5);
    return {
      text: newMessage
    }
  }
  return {};
}
