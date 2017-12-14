require('../services/module')
module.exports = angular
  .module('app.fornecedor.controllers', ['app.fornecedor.services', 'ui.router'])
  .controller('FornecedorFormController', require('./FornecedorFormController'))
  .controller('FornecedorListController', require('./FornecedorListController'))