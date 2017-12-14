DestinoService.$inject = ['GumgaRest']

function DestinoService(GumgaRest) {
  var Service = new GumgaRest(APILocation.apiLocation + '/api/destino')

  return Service;
}

module.exports = DestinoService