require('../services/module')

module.exports = angular
  .module('app.colaborador.controllers', ['app.colaborador.services', 'ui.router'])
  .controller('ColaboradorFormController', require('./ColaboradorFormController'))
  .controller('ColaboradorListController', require('./ColaboradorListController'))