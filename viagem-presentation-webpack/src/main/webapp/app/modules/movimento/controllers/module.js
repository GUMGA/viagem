require('../services/module')
module.exports = angular
  .module('app.movimento.controllers', ['app.movimento.services', 'ui.router'])
  .controller('MovimentoFormController', require('./MovimentoFormController'))
  .controller('MovimentoListController', require('./MovimentoListController'))