GumgaTagDefinitionService.$inject = ['GumgaRest'];

function GumgaTagDefinitionService(GumgaRest) {
  var Service = new GumgaRest(APILocation.apiLocation + '/api/gumgatagdefinition');

  return Service;
}

module.exports = GumgaTagDefinitionService;