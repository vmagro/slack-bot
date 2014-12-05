module.exports = function(message, slackMetadata, callback) {
  if(message.indexOf('born mobile') != -1) {
    //append the slack timestamp so it shows the preview every time
    callback({
      text: 'http://www.extremetech.com/wp-content/uploads/2013/01/hipster-diva.jpg?'+slackMetadata.timestamp
    });
  }
  callback();
};
