/**
 * MessageController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
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

module.exports = {


  /**
   * Action blueprints:
   *    `/message/onMessage`
   */
   onMessage: function (req, res) {
     var bots = require('../../bots');

     if(req.body.user_name.indexOf('bot') != -1) {
       res.end(200);
       return;
     }

     for(var key in bots) {
       console.log('running bot: ' + key);
       var bot = bots[key];
       bot(req.body.text.toLowerCase(), req.body, function callback(result){
         if(result.rewrite) {
           request.post('https://slack.com/api/chat.update', {
             token: req.body.token,
             ts: req.body.timestamp,
             channel: req.body.channel,
             text: result.text
           });
           return res.end(200);
         }
         return res.json(result);
       });
     }

     setTimeout(function(){
       res.end();
     }, 2000);
  },




  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to MessageController)
   */
  _config: {}


};
