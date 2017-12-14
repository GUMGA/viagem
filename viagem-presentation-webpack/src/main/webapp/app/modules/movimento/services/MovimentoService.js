MovimentoService.$inject = ['GumgaRest']

function MovimentoService(GumgaRest) {
  var Service = new GumgaRest(APILocation.apiLocation + '/api/movimento')

  return Service
}

module.exports = MovimentoService