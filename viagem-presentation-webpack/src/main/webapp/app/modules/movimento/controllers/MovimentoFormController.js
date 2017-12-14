MovimentoFormController.$inject = ['MovimentoService', '$state', 'entity','$timeout', '$scope', 'gumgaController', 'ViagemService', 'FornecedorService', '$gmdAlert', '$sce']

function MovimentoFormController(MovimentoService, $state, entity,$timeout, $scope, gumgaController, ViagemService, FornecedorService, $gmdAlert, $sce) {
  gumgaController.createRestMethods($scope, MovimentoService, 'movimento');
  $scope.valueTipoMovimento = [{ value: 'RECEITA', label: 'Receita' }, { value: 'DESPESA', label: 'Despesa' }]
  gumgaController.createRestMethods($scope, ViagemService, 'viagem')
  gumgaController.createRestMethods($scope, FornecedorService, 'fornecedor')

  $scope.movimento.data = entity.data || {}
  $scope.continue = {}


  $scope.searchSupplierF = function(param){
        param = param || '';
        return   $scope.fornecedor
                .methods
                .asyncSearchWithGQuery(new GQuery(new Criteria('obj.nome', ComparisonOperator.CONTAINS, param).addIgnoreCase().addTranslate()))
  }

    $scope.searchSupplierV = function(param){
            param = param || '';
            return $scope.viagem
                .methods
                .asyncSearchWithGQuery(new GQuery(new Criteria('obj.nome', ComparisonOperator.CONTAINS, param).addIgnoreCase().addTranslate()))
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
    MovimentoService.update(obj).then(() => {
      $gmdAlert.success('Sucesso!', 'Registro salvo com sucesso!', 3000)
      $state.go('movimento.list')
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
  <li><a href="https://gumga.github.io/gumga-many-to-one-ng" target="_blank">gumga-many-to-one</a></li> 
  <li><a href="https://gumga.github.io/gumga-counter-ng" target="_blank">gumga-counter</a></li> 
  <li><a href="https://gumga.github.io/gumga-form-buttons-ng" target="_blank">gumga-form-buttons</a></li> 
</ul>`)
}

module.exports = MovimentoFormController