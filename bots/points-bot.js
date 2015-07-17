/**
 * Created by vmagro on 7/16/15.
 */

var db = require('orchestrate')(process.env.ORCHESTRATE_TOKEN);

module.exports = function (message, slackMetadata, callback) {
  if (message.indexOf('++') !== -1) {
    var thing = findThing(message, '++');
    applyPoint(thing, 1, function (val) {
      var text = thing + ' has ' + val + ' point';
      if (val !== 1) {
        text += 's';
      }
      callback({
        text: text
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
  //this code is really gross but it gets the job done
  db.get('points', thing)
    .then(function (res) {
      var pointsObj = res.body;
      if (pointsObj) {
        console.log(pointsObj);
        db.put('points', thing, {
          point: pointsObj.point + val
        });
        cb(pointsObj.point + val);
      } else {
        db.put('points', thing, {
          point: val
        });
        cb(val);
      }
    })
    .fail(function (err) {
      db.put('points', thing, {
        point: val
      });
      cb(val);
    });
}

function findThing(message, token) {
  var tokenEndIndex = message.indexOf(token) + token.length;
  var endIndex = message.indexOf(' ', tokenEndIndex);
  if (endIndex === -1) {
    endIndex = message.length;
  }
  return message.substring(tokenEndIndex, endIndex);
}