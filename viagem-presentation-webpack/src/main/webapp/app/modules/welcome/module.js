require('./services/module')
require('./controllers/module')

module.exports = angular
  .module('app.welcome', [
    'ui.router',
    'app.welcome.controllers',
    'app.welcome.services'
  ])
  .config(function ($stateProvider, $httpProvider) {
    $stateProvider
      .state('welcome.home', {
        url: '/home',
        templateUrl: 'app/modules/welcome/views/welcome.html',
        controller: 'WelcomeController'
      })
  })