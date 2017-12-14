require('../services/module')
module.exports = angular
  .module('app.rota.controllers', ['app.rota.services', 'ui.router'])
  .controller('RotaFormController', require('./RotaFormController'))
  .controller('RotaListController', require('./RotaListController'))