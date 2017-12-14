require('../services/module')
module.exporta = angular
  .module('app.studio.controllers', ['app.studio.services', 'ui.router'])
  .controller('StudioFormController', require('./StudioFormController'))
  .controller('StudioListController', require('./StudioListController'))