require('./services/module')
require('./controllers/module')

module.exports = angular
  .module('app.rota', [
    'ui.router',
    'app.rota.controllers',
    'app.rota.services'
  ])
  .config(function ($stateProvider, $httpProvider) {
    $stateProvider
      .state('rota.list', {
        url: '/list',
        templateUrl: 'app/modules/rota/views/list.html',
        controller: 'RotaListController'
      })
      .state('rota.insert', {
        url: '/insert',
        templateUrl: 'app/modules/rota/views/form.html',
        controller: 'RotaFormController',
        resolve: {
          entity: ['$stateParams', '$http', function ($stateParams, $http) {
            return $http.get(APILocation.apiLocation + '/api/rota/new')
          }]
        }
      })
      .state('rota.edit', {
        url: '/edit/:id',
        templateUrl: 'app/modules/rota/views/form.html',
        controller: 'RotaFormController',
        resolve: {
          entity: ['$stateParams', '$http', function ($stateParams, $http) {
            return $http.get(APILocation.apiLocation + '/api/rota/' + $stateParams.id)
          }]
        }
      })
  })