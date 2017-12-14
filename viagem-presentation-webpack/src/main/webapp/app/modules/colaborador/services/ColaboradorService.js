ColaboradorService.$inject = ['GumgaRest', '$http']

function ColaboradorService(GumgaRest, $http) {
  var Service = new GumgaRest(APILocation.apiLocation + '/api/colaborador')

  Service.uploadImages = (images) => {
    let foto = new FormData()
    foto.append('foto', images)
    // return $http.post(APILocation.apiLocation + "/api/colaborador/foto", images
    return $http({
      url: APILocation.apiLocation + '/api/colaborador/foto',
      method: 'POST',
      data: foto,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
  }

  return Service
}

module.exports = ColaboradorService