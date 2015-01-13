/**
 * MessageController
 *
 * @module      :: Controller
 * @description    :: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

var request = require('request');
var async = require('async');

module.exports = {


    /**
     * Action blueprints:
     *    `/message/onMessage`
     */
    onMessage: function (req, res) {
        var bots = require('../../bots');

        if (req.body.user_name.indexOf('bot') != -1) {
            res.send(200);
            return;
        }

        async.eachSeries(Object.keys(bots), function (botName, callback) {
            console.log('running ' + botName);
            var bot = bots[botName];
            try {
                bot(req.body.text.toLowerCase(), req.body, function (result) {
                    callback(result); //see comment below about this method of detecting a bot finishing
                });
            } catch (e) {
                console.error('bot ' + key + ' failed');
                console.error(e);
                callback();
            }
        }, function (message) { // I am abusing the fact that async will return an "error" here at the first execution where a bot returns a value. We are using the parameter normally for errors as the message to be returned.
            console.log('bot returned');
            return res.json(message);
        });
    },

    thebro: function(req, res) {
        return res.redirect('https://scontent-a-lax.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/10157152_10202200513747625_7381961324784988088_n.jpg?oh=27e17019b9de2c9c6a878a6b5407701e&oe=54FB559C');
    },

    darthjames: function(req, res) {
        return res.redirect('https://scontent-a.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/10917368_10204853862860584_6527526621139048024_n.jpg?oh=eb78679e3ce0b11d393794d8df98a356&oe=556D45E8');
    },


    /**
     * Overrides for the settings in `config/controllers.js`
     * (specific to MessageController)
     */
    _config: {}


};
