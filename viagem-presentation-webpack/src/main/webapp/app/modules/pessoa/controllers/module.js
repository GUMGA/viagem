
require('../services/module')
module.exports = angular
  .module('app.pessoa.controllers', ['app.pessoa.services', 'ui.router'])
  .controller('PessoaFormController', require('./PessoaFormController'))
  .controller('PessoaListController', require('./PessoaListController'))