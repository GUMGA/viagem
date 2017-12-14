FornecedorService.$inject = ['GumgaRest']

function FornecedorService(GumgaRest) {
  var Service = new GumgaRest(APILocation.apiLocation + '/api/fornecedor')

  return Service
}

module.exports = FornecedorService