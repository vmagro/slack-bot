var exec = require('child_process').exec;

module.exports = function(message, slackMetadata, callback) {
  if(slackMetadata.user_name === 'ian') {
    console.log('dogeifying ians message');
    exec('ruby -e "require \'dogeify\'\n dogeifier = Dogeify.new\n puts dogeifier.process(\''+message+'\')"', function(err, stdout, stderr) {
      callback({
        text: stdout.trim()
      });
    });

  }
};
