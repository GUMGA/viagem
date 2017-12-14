BaseService.$inject = ['$http', 'GumgaRest']

function BaseService($http, GumgaRest) {
  var Service = new GumgaRest()

  Service.getGumgaMenu = () => {
    return $http.get('./gumga-menu.json')
  }

  Service.getKeysJsonUrl = () => {
    return $http.get('./keys.json')
  }

  Service.closeEmitter = () => {
    if (Service.emitterCommand) {
      Service.emitterCommand.close()
      delete Service.emitterCommand
    }
  }

  Service.listOrganizations = () => {
    var usr = JSON.parse(sessionStorage.getItem('user'))
    var token = usr.token
    return $http.get(APILocation.apiLocation + '/public/token/organizations/' + token);
  }

  Service.changeOrganization = (organizationId) => {
    var usr = JSON.parse(sessionStorage.getItem('user'))
    var token = usr.token
    return $http.get(APILocation.apiLocation + '/public/token/changeorganization/' + token + '/' + organizationId)
  }

  Service.formatTelefone = (telefone) => {
    var telTemp = ("" + telefone).replace(/\D/g, '');
    var result = telTemp.match(/^(\d{2})(\d{4})(\d{4,5})$/);
    return (!result) ? null : "(" + result[1] + ") " + result[2] + "-" + result[3];
  }

  return Service
}

module.exports = BaseService