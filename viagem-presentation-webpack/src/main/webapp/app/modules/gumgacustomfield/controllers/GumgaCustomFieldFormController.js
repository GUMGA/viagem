GumgaCustomFieldFormController.$inject = ['GumgaCustomFieldService', '$state', 'entity', '$scope', 'gumgaController', '$gmdAlert', '$sce']

function GumgaCustomFieldFormController(GumgaCustomFieldService, $state, entity, $scope, gumgaController, $gmdAlert, $sce) {
  gumgaController.createRestMethods($scope, GumgaCustomFieldService, 'gumgacustomfield')
  $scope.gumgacustomfield.data = entity.data || {}
  $scope.continue = {}

  var config = {
    offset: 10,
    timer: 100,
    delay: 3000,
    alowDismiss: true,
    animationEnter: 'animated fadeInRightBig',
    animationExit: 'animated fadeOutRight'
  }

  $scope.clazzes = [
    { label: 'Destino', value: 'io.gumga.viagem.domain.model.Destino' }
  ]
  $scope.customFields = [
    { label: 'Texto', value: 'TEXT' },
    { label: 'Número', value: 'NUMBER' },
    { label: 'Data', value: 'DATE' },
    { label: 'Booleano', value: 'LOGIC' },
    { label: 'Seleção', value: 'SELECTION' }
  ]

  $scope.changeClazz = (option) => {
    $scope.gumgacustomfield.data.clazz = option.value
  }

  $scope.changeType = (option) => {
    $scope.gumgacustomfield.data.type = option.value
  }

  $scope.$watch('gumgacustomfield.data.type', function (newValue, oldValue) {
    if (($scope.gumgacustomfield.data.id == null) || ($scope.gumgacustomfield.data.id != null && newValue != oldValue)) {
      switch (newValue) {
        case 'TEXT': $scope.gumgacustomfield.data.defaultValueScript = "''"; break
        case 'NUMBER': $scope.gumgacustomfield.data.defaultValueScript = '0'; break
        case 'DATE': $scope.gumgacustomfield.data.defaultValueScript = 'new Date()'; break
        case 'LOGIC': $scope.gumgacustomfield.data.defaultValueScript = true; break
        case 'SELECTION': $scope.gumgacustomfield.data.defaultValueScript = "''"; break
      }
    }
  })

  $scope.salvar = (obj) => {
    GumgaCustomFieldService.update(obj).then(() => {
      $gmdAlert.success('Sucesso!', 'Registro salvo com sucesso!', 3000)
      $state.go('gumgacustomfield.list')
    })
  }

  $scope.htmlPopover = $sce.trustAsHtml(`
<ul> 
  <li><a href="https://gumga.github.io/gumga-form-ng/1.0.3" target="_blank">gumga-error</a></li> 
  <li><a href="https://gumga.github.io/gumga-form-ng/1.0.3" target="_blank">gumga-form</a></li> 
  <li><a href="https://gumga.github.io/gumga-translate-ng/1.1.0" target="_blank">gumga-translate-tag</a></li>
  <li><a href="https://gumga.github.io/gumga-form-buttons-ng/1.1.0" target="_blank">gumga-form-buttons</a></li> 
</ul>`)
}

module.exports = GumgaCustomFieldFormController