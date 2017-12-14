StudioService.$inject = ['GumgaRest']

function StudioService(GumgaRest) {
  var Service = new GumgaRest(APILocation.apiLocation + '/api/studio')

  return Service
}

module.exports = StudioService