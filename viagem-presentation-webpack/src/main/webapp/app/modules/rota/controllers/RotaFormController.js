RotaFormController.$inject = ['RotaService', 'DestinoService', '$state', 'entity', '$scope', 'gumgaController', '$gmdAlert', '$sce']

function RotaFormController(RotaService, DestinoService, $state, entity, $scope, gumgaController, $gmdAlert, $sce) {
    gumgaController.createRestMethods($scope, RotaService, 'rota')
    gumgaController.createRestMethods($scope, DestinoService, 'destino')

    $scope.rota.data = entity.data || {}
    $scope.continue = {}

    $scope.searchDestiny = function (param) {
        param = param || '';
        return $scope.destino.methods.asyncSearchWithGQuery(new GQuery(
            new Criteria('obj.nome', ComparisonOperator.CONTAINS, param).addTranslate().addIgnoreCase()))
    }

    var config = {
        offset: 10,
        timer: 100,
        delay: 3000,
        alowDismiss: true,
        animationEnter: 'animated fadeInRightBig',
        animationExit: 'animated fadeOutRight'
    }

    $scope.salvar = (obj) => {
        RotaService.update(obj).then(() => {
            $gmdAlert.success('Sucesso!', 'Registro salvo com sucesso!', 3000)
            $state.go('rota.list')
        })
    }

    $scope.htmlPopover = $sce.trustAsHtml(`
<ul> 
  <li><a href="https://gumga.github.io/gumga-form-ng" target="_blank">gumga-error</a></li>
  <li><a href="https://gumga.github.io/gumga-form-ng" target="_blank">gumga-required</a></li> 
  <li><a href="https://gumga.github.io/gumga-form-ng" target="_blank">gumga-errors</a></li> 
  <li><a href="https://gumga.github.io/gumga-form-ng" target="_blank">gumga-form</a></li> 
  <li><a href="https://gumga.github.io/gumga-translate-ng" target="_blank">gumga-translate-tag</a></li> 
  <li><a href="https://gumga.github.io/gumga-many-to-one-ng" target="_blank">gumga-many-to-one</a></li> 
  <li><a href="https://gumga.github.io/gumga-counter-ng" target="_blank">gumga-counter</a></li> 
  <li><a href="https://gumga.github.io/gumga-form-buttons-ng" target="_blank">gumga-form-buttons</a></li> 
</ul>`)
}

module.exports = RotaFormController