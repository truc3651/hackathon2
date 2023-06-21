'use strict';

const api = require('./api');
const bot = require('./bot');

module.exports = function(app) {
  var secretsManager = require('./secret-manager');

  // todoList Routes
  app.route('/secretsmanager/get')
    .get(secretsManager.get);

  // get template
  app.route('/api/emails/pe/email')
  .get(api.get)

  // get template
  app.route('/v1/api/bot/request')
  .post(bot.post)
};
