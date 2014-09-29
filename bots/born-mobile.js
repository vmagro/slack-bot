module.exports = function(message, slackMetadata) {
  if(message.indexOf('born mobile') != -1) {
    return {
      text: 'http://www.extremetech.com/wp-content/uploads/2013/01/hipster-diva.jpg'
    };
  }
};
