module.exports = function(message, slackMetadata, callback) {
  if(message.indexOf('bro sydney') != -1) {
    //append the slack timestamp so it shows the preview every time
    callback({
      text: 'https://scontent-a-lax.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/10157152_10202200513747625_7381961324784988088_n.jpg?oh=b468745f0fc62743751bfb46c9fe25ba&oe=5484AE9C&slack='+slackMetadata.timestamp
    });
  }
};
