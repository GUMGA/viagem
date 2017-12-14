RotaService.$inject = ['GumgaRest']

function RotaService(GumgaRest) {
  var Service = new GumgaRest(APILocation.apiLocation + '/api/rota')

  return Service
}

module.exports = RotaService