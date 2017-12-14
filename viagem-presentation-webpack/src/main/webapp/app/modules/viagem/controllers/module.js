require('../services/module')
module.exports = angular
  .module('app.viagem.controllers', ['app.viagem.services', 'ui.router'])
  .controller('ModalRotaController', require('./ModalRotaController'))
  .controller('ViagemFormController', require('./ViagemFormController'))
  .controller('ViagemListController', require('./ViagemListController'))