require('../services/module')


module.exports = angular.module('app.destino.controllers', ['app.destino.services', 'ui.router'])
  .controller('DestinoFormController', require('./DestinoFormController'))
  .controller('DestinoListController', require('./DestinoListController'))