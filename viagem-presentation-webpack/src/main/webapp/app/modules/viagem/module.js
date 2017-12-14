require('./services/module')
require('./controllers/module')

module.exports = angular
  .module('app.viagem', [
    'ui.router',
    'app.viagem.controllers',
    'app.viagem.services'
  ])
  .config(function ($stateProvider, $httpProvider) {
    $stateProvider
      .state('viagem.list', {
        url: '/list',
        templateUrl: 'app/modules/viagem/views/list.html',
        controller: 'ViagemListController'
      })
      .state('viagem.insert', {
        url: '/insert',
        templateUrl: 'app/modules/viagem/views/form.html',
        controller: 'ViagemFormController',
        resolve: {
          entity: ['$stateParams', '$http', function ($stateParams, $http) {
            return $http.get(APILocation.apiLocation + '/api/viagem/new')
          }]
        }
      })
      .state('viagem.edit', {
        url: '/edit/:id',
        templateUrl: 'app/modules/viagem/views/form.html',
        controller: 'ViagemFormController',
        resolve: {
          entity: ['$stateParams', '$http', function ($stateParams, $http) {
            return $http.get(APILocation.apiLocation + '/api/viagem/' + $stateParams.id)
          }]
        }
      })
  })