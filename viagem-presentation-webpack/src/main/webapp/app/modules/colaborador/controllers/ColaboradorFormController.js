ColaboradorFormController.$inject = ['ColaboradorService', '$state', 'entity', '$scope', 'gumgaController', '$gmdAlert', '$sce']

function ColaboradorFormController(ColaboradorService, $state, entity, $scope, gumgaController, $gmdAlert, $sce) {
  gumgaController.createRestMethods($scope, ColaboradorService, 'colaborador')

  $scope.colaborador.data = entity.data || {}
  $scope.continue = {}

  var config = {
    offset: 10,
    timer: 100,
    delay: 3000,
    alowDismiss: true,
    animationEnter: 'animated fadeInRightBig',
    animationExit: 'animated fadeOutRight'
  }

  $scope.upload = (images) => {
    return ColaboradorService.uploadImages(images)
  }

  // console.log($scope.colaborador.methods.getDocumentationURL())

  $scope.salvar = (obj) => {
    if (obj.endereco) {
      obj.endereco.longitude = 0
      obj.endereco.latitude = 0
      obj.endereco.formalCode = '0'
    }

    ColaboradorService.update(obj).then(() => {
      $gmdAlert.error('Sucesso!', 'Registro salvo com sucesso!', 3000)
      $state.go('colaborador.list')
    })
  }

  $scope.htmlPopover = $sce.trustAsHtml(`
<ul> 
  <li><a href="https://gumga.github.io/gumga-form-ng" target="_blank">gumga-error</a></li> 
  <li><a href="https://gumga.github.io/gumga-form-ng" target="_blank">gumga-required</a></li> 
  <li><a href="https://gumga.github.io/gumga-form-ng" target="_blank">gumga-errors</a></li> 
  <li><a href="https://gumga.github.io/gumga-form-ng" target="_blank">gumga-form</a></li> 
  <li><a href="https://gumga.github.io/gumga-translate-ng" target="_blank">gumga-translate-tag</a></li> 
  <li><a href="https://gumga.github.io/#/app/components/3.2.0#imageupload" target="_blank">gumga-image-upload</a></li> 
  <li><a href="https://gumga.github.io/gumga-mask-ng" target="_blank">gumga-mask</a></li> 
  <li><a href="https://gumga.github.io/gumga-documentation-ng" target="_blank">gumga-documentation</a></li> 
  <li><a href="https://gumga.github.io/gumga-address-ng" target="_blank">gumga-address</a></li> 
  <li><a href="https://gumga.github.io/#/app/components/3.2.0" target="_blank">gumga-custom-fields</a></li> 
  <li><a href="https://gumga.github.io/gumga-form-buttons-ng" target="_blank">gumga-form-buttons</a></li> 
</ul>`)
}

module.exports = ColaboradorFormController