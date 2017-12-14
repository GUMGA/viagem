require('./controllers/module')
require('./services/module')

module.exports = angular.module('app.login', ['ui.router', 'app.login.controllers', 'app.login.services'])
  .config(function ($stateProvider) {
    $stateProvider
      .state('login.log', {
        url: '/log',
        templateUrl: 'app/modules/login/views/login.html',
        controller: 'LoginController'
      })
      .state('login.forgot', {
        url: '/forgot',
        templateUrl: 'app/modules/login/views/forgot.html',
        controller: 'ForgotController'
      })
      .state('login.insert', {
        url: '/insert',
        templateUrl: 'app/modules/login/views/insert.html',
        controller: 'InsertController'
      })
  })