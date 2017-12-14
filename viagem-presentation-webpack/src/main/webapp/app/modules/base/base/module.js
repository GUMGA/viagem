module.exports = angular.module('base.base', [])
  .service('BaseService', require('./BaseService'))
  .controller('BaseController', require('./BaseController'));