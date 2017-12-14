require('./services/module')
require('./controllers/module')

module.exports = angular
  .module('app.movimento', [
    'ui.router',
    'app.movimento.controllers',
    'app.movimento.services'
  ])
  .config(function ($stateProvider, $httpProvider) {
    $stateProvider
      .state('movimento.list', {
        url: '/list',
        templateUrl: 'app/modules/movimento/views/list.html',
        controller: 'MovimentoListController'
      })
      .state('movimento.insert', {
        url: '/insert',
        templateUrl: 'app/modules/movimento/views/form.html',
        controller: 'MovimentoFormController',
        resolve: {
          entity: ['$stateParams', '$http', function ($stateParams, $http) {
            return $http.get(APILocation.apiLocation + '/api/movimento/new')
          }]
        }
      })
      .state('movimento.edit', {
        url: '/edit/:id',
        templateUrl: 'app/modules/movimento/views/form.html',
        controller: 'MovimentoFormController',
        resolve: {
          entity: ['$stateParams', '$http', function ($stateParams, $http) {
            return $http.get(APILocation.apiLocation + '/api/movimento/' + $stateParams.id)
          }]
        }
      })
  })