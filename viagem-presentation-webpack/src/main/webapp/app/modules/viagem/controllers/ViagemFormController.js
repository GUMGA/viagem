ViagemFormController.$inject = ['ViagemService', '$state', 'entity', '$scope', 'gumgaController', 'ColaboradorService', '$gmdAlert', '$timeout', '$sce']

function ViagemFormController(ViagemService, $state, entity, $scope, gumgaController, ColaboradorService, $gmdAlert, $timeout, $sce) {
    gumgaController.createRestMethods($scope, ViagemService, 'viagem')
    gumgaController.createRestMethods($scope, ColaboradorService, 'colaborador')

    $scope.viagem.data = entity.data || {}
    $scope.viagem.data.rota = $scope.viagem.data.rota || []
    $scope.urlEndpoint = APILocation.apiLocation + '/api/viagem/comprovantes' // ENDPOINT do gumgaupload
    $scope.continue = {}
    $scope.listAccepted = 'png,jpg,jpeg,pdf,zip,rar,xml'

    $scope.searchEmployee = function(param){
        param = param || '';
        $scope.colaborador.methods.searchWithGQuery(
            new GQuery(new Criteria('obj.nome',ComparisonOperator.CONTAINS, param)
                .addIgnoreCase().addTranslate()))
    }

    if ($scope.viagem.data.nome == null || $scope.viagem.data.comprovante == null) {
        $scope.viagem.data.comprovante = { name: '' }
    }

    $scope.openPDF = () => {
        ViagemService.getComprovante($scope.viagem.data.comprovante.name.split('/')[0])
    }
    $scope.deletePDF = () => {
        ViagemService.deleteComprovante($scope.viagem.data.comprovante.name.split('/')[0]).then((response) => {
            $gmdAlert.success('Exclusão', 'Arquivo excluido com sucesso!')
            $scope.viagem.data.comprovante.name = ''
        })
    }

    $scope.uploadStart = () => {
        if ($scope.viagem.data.comprovante.name != '') {
            $gmdAlert.createInfoMessage('Conflito!', 'Apague o arquivo da lista e envie novamente!')
            throw 'Já existe arquivo nessa viagem, apague para incluir outro.'
        }
    }

    var config = {
        offset: 10,
        timer: 100,
        delay: 2000,
        alowDismiss: true,
        animationEnter: 'animated fadeInRightBig',
        animationExit: 'animated fadeOutRight'
    }

    $scope.salvar = (obj) => {
        ViagemService.save(obj).then(() => {
            $gmdAlert.success('Sucesso!', 'Registro salvo com sucesso!', 3000)
            $state.go('viagem.list')
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
  <li><a href="https://gumga.github.io/gumga-many-to-many-ng" target="_blank">gumga-many-to-many</a></li>
  <li><a href="https://gumga.github.io/gumga-file-upload-ng" target="_blank">gumga-file-upload</a></li>
  <li><a href="https://gumga.github.io/gumga-counter-ng" target="_blank">gumga-counter</a></li>
  <li><a href="https://gumga.github.io/gumga-form-buttons-ng" target="_blank">gumga-form-buttons</a></li>
</ul>`)
}

module.exports = ViagemFormController
