/**
 * Created by vmagro on 7/16/15.
 */

var db = require('orchestrate')(process.env.ORCHESTRATE_TOKEN);

module.exports = function (message, slackMetadata, callback) {
  if (message.indexOf('++') !== -1) {
    var thing = findThing(message, '++');
    applyPoint(thing, 1, function (val) {
      callback({
        text: thing + ' has ' + val + ' points'
      });
    });
  }
  if (message.indexOf('--') !== -1) {
    var thing = findThing(message, '--');
    applyPoint(thing, -1, function (val) {
      callback({
        text: thing + ' has ' + val + ' points'
      });
    });
  }

  if (message.indexOf('++') === -1 && message.indexOf('--') === -1) {
    callback();
  }

};

function applyPoint(thing, val, cb) {
  db.newPatchBuilder('points', thing)
    .inc("point", val)
    .apply()
    .then(function (result) {
      cb(result);
    })
    .fail(function (err) {
    })
}

function findThing(message, token) {
  var tokenEndIndex = message.indexOf(token) + token.length;
  var endIndex = message.indexOf(' ', tokenEndIndex);
  if (endIndex === -1) {
    endIndex = message.length;
  }
  return message.substring(tokenEndIndex, endIndex);
}