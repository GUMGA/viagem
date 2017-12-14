require('./services/module')
require('./controllers/module')

module.exports = angular
  .module('app.destino', [
    'ui.router',
    'app.destino.controllers',
    'app.destino.services'
  ])
  .config(function ($stateProvider, $httpProvider) {
    $stateProvider
      .state('destino.list', {
        url: '/list',
        templateUrl: 'app/modules/destino/views/list.html',
        controller: 'DestinoListController'
      })
      .state('destino.insert', {
        url: '/insert',
        templateUrl: 'app/modules/destino/views/form.html',
        controller: 'DestinoFormController',
        resolve: {
          entity: ['$stateParams', '$http', function ($stateParams, $http) {
            return $http.get(APILocation.apiLocation + '/api/destino/new')
          }]
        }
      })
      .state('destino.edit', {
        url: '/edit/:id',
        templateUrl: 'app/modules/destino/views/form.html',
        controller: 'DestinoFormController',
        resolve: {
          entity: ['$stateParams', '$http', function ($stateParams, $http) {
            return $http.get(APILocation.apiLocation + '/api/destino/' + $stateParams.id)
          }]
        }
      })
  })