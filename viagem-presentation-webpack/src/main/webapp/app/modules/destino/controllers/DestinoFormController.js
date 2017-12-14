DestinoFormController.$inject = ['DestinoService', '$state', 'entity', '$scope', 'gumgaController', '$gmdAlert', '$sce'];

function DestinoFormController(DestinoService, $state, entity, $scope, gumgaController, $gmdAlert, $sce) {

  gumgaController.createRestMethods($scope, DestinoService, 'destino')
  $scope.destino.data = entity.data || {}
  $scope.continue = {}

  var config = {
    offset: 10,
    timer: 100,
    delay: 3000,
    alowDismiss: true,
    animationEnter: 'animated fadeInRightBig',
    animationExit: 'animated fadeOutRight'
  }


  $scope.success = (event) => {
    if (event.resultado === '0') {
      $gmdAlert.error('Busca de CEP!', 'CEP não encontrado, repita sua busca!', 3000)
      document.getElementById('inputendereco').value = ''
      document.getElementById('inputendereco').focus()
    }
  }

  $scope.salvar = (obj) => {
    if (obj.endereco) {
      obj.endereco.longitude = 0
      obj.endereco.latitude = 0
      obj.endereco.formalCode = '0'
    }
    DestinoService.update(obj).then(() => {
      $gmdAlert.success('Sucesso!', 'Registro salvo com sucesso!', 3000)
      $state.go('destino.list')
    })
  }

  $scope.htmlPopover = $sce.trustAsHtml(`
    <ul> 
      <li><a href="https://gumga.github.io/gumga-form-ng" target="_blank">gumga-error</a></li> 
      <li><a href="https://gumga.github.io/gumga-form-ng" target="_blank">gumga-required</a></li> 
      <li><a href="https://gumga.github.io/gumga-form-ng" target="_blank">gumga-errors</a></li> 
      <li><a href="https://gumga.github.io/gumga-form-ng" target="_blank">gumga-form</a></li> 
      <li><a href="https://gumga.github.io/gumga-translate-ng" target="_blank">gumga-translate-tag</a></li> 
      <li><a href="https://gumga.github.io/gumga-mask-ng" target="_blank">gumga-mask</a></li> 
      <li><a href="https://gumga.github.io/gumga-address-ng" target="_blank">gumga-address</a></li> 
      <li><a href="https://gumga.github.io/#/app/components" target="_blank">gumga-custom-fields</a></li> 
      <li><a href="https://gumga.github.io/gumga-form-buttons-ng" target="_blank">gumga-form-buttons</a></li> 
    </ul>`)
}

module.exports = DestinoFormController