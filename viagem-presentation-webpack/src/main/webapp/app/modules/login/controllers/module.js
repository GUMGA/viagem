require('../services/module')

module.exports = angular.module('app.login.controllers', ['app.login.services', 'ui.bootstrap'])
  .controller('LoginController', require('./LoginController'))
  .controller('InsertController', require('./InsertController'))
  .controller('ForgotController', require('./ForgotController'))