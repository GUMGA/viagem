StudioFormController.$inject = ['StudioService', '$state', 'entity', '$scope', 'gumgaController', '$gmdAlert', '$sce']

function StudioFormController(StudioService, $state, entity, $scope, gumgaController, $gmdAlert, $sce) {
  gumgaController.createRestMethods($scope, StudioService, 'studio')

  $scope.studio.data = entity.data || {}
  $scope.continue = {}
  // Link para a Apresentação
  // http://gumga.studio/dashboard/#/shared/gumga/apresentacaoviagem

  var config = {
    offset: 10,
    timer: 100,
    delay: 3000,
    alowDismiss: true,
    animationEnter: 'animated fadeInRightBig',
    animationExit: 'animated fadeOutRight'
  }

  $scope.removerRegistro = (obj) => {
    StudioService.delete(obj).then((response) => {
      $gmdAlert.success('Sucesso!', 'Registro deletado com sucesso!', 3000)
      $state.go('studio.list')
    })
  }

  $scope.salvar = (obj) => {
    StudioService.update(obj).then(() => {
      $gmdAlert.success('Sucesso!', 'Registro salvo com sucesso!', 3000)
      $state.go('studio.list')
    })
  }

  $scope.htmlPopover = $sce.trustAsHtml(`
<ul> 
  <li><a href="https://gumga.github.io/gumga-form-ng" target="_blank">gumga-error</a></li> 
  <li><a href="https://gumga.github.io/gumga-form-ng" target="_blank">gumga-required</a></li> 
  <li><a href="https://gumga.github.io/gumga-form-ng" target="_blank">gumga-errors</a></li> 
  <li><a href="https://gumga.github.io/gumga-form-ng" target="_blank">gumga-form</a></li>
  <li><a href="https://gumga.github.io/gumga-confirm" target="_blank">gumga-confirm</a></li>
  <li><a href="https://gumga.github.io/gumga-translate-ng" target="_blank">gumga-translate-tag</a></li>
  <li><a href="https://gumga.github.io/gumga-form-buttons-ng" target="_blank">gumga-form-buttons</a></li> 
</ul>`)
}

module.exports = StudioFormController