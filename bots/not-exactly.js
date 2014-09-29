module.exports = function(message, slackMetadata) {
  if(message.indexOf('not exactly') != -1) {
    //append the slack timestamp so it shows the preview every time
    return {
      text: 'http://www.adweek.com/files/imagecache/node-detail/news_article/gary-shapiro-ces-hed-2012.jpg?'+slackMetadata.timestamp
    };
  }
};
