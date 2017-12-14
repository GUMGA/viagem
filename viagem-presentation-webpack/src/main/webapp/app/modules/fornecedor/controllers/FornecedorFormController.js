FornecedorFormController.$inject = ['FornecedorService', '$state', 'entity', '$scope', 'gumgaController', '$gmdAlert', '$sce']

function FornecedorFormController(FornecedorService, $state, entity, $scope, gumgaController, $gmdAlert, $sce) {
    gumgaController.createRestMethods($scope, FornecedorService, 'fornecedor')

    $scope.fornecedor.data = entity.data || {}
    $scope.continue = {}

    var config = {
        offset: 10,
        timer: 100,
        delay: 3000,
        alowDismiss: true,
        animationEnter: 'animated fadeInRightBig',
        animationExit: 'animated fadeOutRight'
    }

    $scope.change = () => {
        $scope.fornecedor.data.documento = ''
    }

    $scope.salvar = (obj) => {
        FornecedorService.update(obj).then(() => {
            $gmdAlert.success('Sucesso!', 'Registro salvo com sucesso!', 3000)
            $state.go('fornecedor.list')
        })
    }

    $scope.htmlPopover = $sce.trustAsHtml(`
<ul> 
  <li><a href="https://gumga.github.io/gumga-form-ng" target="_blank">gumga-error</a></li> 
  <li><a href="https://gumga.github.io/gumga-form-ng" target="_blank">gumga-required</a></li> 
  <li><a href="https://gumga.github.io/gumga-form-ng" target="_blank">gumga-errors</a></li> 
  <li><a href="https://gumga.github.io/gumga-form-ng" target="_blank">gumga-form</a></li> 
  <li><a href="https://gumga.github.io/gumga-translate-ng" target="_blank">gumga-translate-tag</a></li> 
  <li><a href="https://gumga.github.io/gumga-form-ng" target="_blank">gumga-validate-type</a></li>
  <li><a href="https://gumga.github.io/gumga-form-buttons-ng" target="_blank">gumga-form-buttons</a></li>
</ul>`)
}

module.exports = FornecedorFormController