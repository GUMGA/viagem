require('./services/module')
require('./controllers/module')

module.exports = angular
  .module('app.fornecedor', [
    'ui.router',
    'app.fornecedor.controllers',
    'app.fornecedor.services'
  ])
  .config(function ($stateProvider, $httpProvider) {
    $stateProvider
      .state('fornecedor.list', {
        url: '/list',
        templateUrl: 'app/modules/fornecedor/views/list.html',
        controller: 'FornecedorListController'
      })
      .state('fornecedor.insert', {
        url: '/insert',
        templateUrl: 'app/modules/fornecedor/views/form.html',
        controller: 'FornecedorFormController',
        resolve: {
          entity: ['$stateParams', '$http', function ($stateParams, $http) {
            return $http.get(APILocation.apiLocation + '/api/fornecedor/new')
          }]
        }
      })
      .state('fornecedor.edit', {
        url: '/edit/:id',
        templateUrl: 'app/modules/fornecedor/views/form.html',
        controller: 'FornecedorFormController',
        resolve: {
          entity: ['$stateParams', '$http', function ($stateParams, $http) {
            return $http.get(APILocation.apiLocation + '/api/fornecedor/' + $stateParams.id)
          }]
        }
      })
  })