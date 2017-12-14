require('../services/module')

module.exports = angular
  .module('app.welcome.controllers', ['app.welcome.services', 'ui.router'])
  .controller('WelcomeController', require('./WelcomeController'))