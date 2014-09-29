var exec = require('child_process').exec;

module.exports = function(message, slackMetadata, callback) {
  if(slackMetadata.user_name === 'ian' || (message.indexOf('dogeify') == 0)) {
    var toDogeify = message;
    if(toDogeify.indexOf('dogeify') == 0)
      toDogeify = toDogeify.substring(8);
    exec('ruby -e "require \'dogeify\'\n dogeifier = Dogeify.new\n puts dogeifier.process(\''+toDogeify+'\')"', function(err, stdout, stderr) {
      callback({
        text: stdout.trim()
      });
    });

  }
};
