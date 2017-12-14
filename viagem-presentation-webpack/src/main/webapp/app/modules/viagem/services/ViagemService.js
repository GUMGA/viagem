ViagemService.$inject = ['GumgaRest', '$http']

function ViagemService(GumgaRest, $http) {
  var Service = new GumgaRest(APILocation.apiLocation + '/api/viagem')

  Service.getComprovante = (image) => {
    var token = sessionStorage.getItem('token')
    if (token) {
      return window.open(APILocation.apiLocation + '/api/viagem/comprovantes/' + image + '?gumgaToken=' + token, '_blank')
    }
  }

  Service.deleteComprovante = (image) => {
    return $http.delete(APILocation.apiLocation + '/api/viagem/comprovantes/' + image)
  }

  return Service
}

module.exports = ViagemService