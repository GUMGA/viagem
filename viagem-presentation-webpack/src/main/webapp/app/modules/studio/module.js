require('./services/module')
require('./controllers/module')

module.exports = angular
  .module('app.studio', [
    'ui.router',
    'app.studio.controllers',
    'app.studio.services'
  ])
  .config(function ($stateProvider, $httpProvider) {
    $stateProvider
      .state('studio.list', {
        url: '/list',
        templateUrl: 'app/modules/studio/views/list.html',
        controller: 'StudioListController'
      })
      .state('studio.insert', {
        url: '/insert',
        templateUrl: 'app/modules/studio/views/form.html',
        controller: 'StudioFormController',
        resolve: {
          entity: ['$stateParams', '$http', function ($stateParams, $http) {
            return $http.get(APILocation.apiLocation + '/api/studio/new')
          }]
        }
      })
      .state('studio.edit', {
        url: '/edit/:id',
        templateUrl: 'app/modules/studio/views/form.html',
        controller: 'StudioFormController',
        resolve: {
          entity: ['$stateParams', '$http', function ($stateParams, $http) {
            return $http.get(APILocation.apiLocation + '/api/studio/' + $stateParams.id)
          }]
        }
      })
  })