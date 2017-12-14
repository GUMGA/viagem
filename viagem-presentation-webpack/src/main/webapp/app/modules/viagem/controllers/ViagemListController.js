ViagemListController.$inject = ['$scope', 'ViagemService', 'gumgaController', '$gmdAlert']

function ViagemListController($scope, ViagemService, gumgaController, $gmdAlert) {
    gumgaController.createRestMethods($scope, ViagemService, 'viagem', 'page')
    ViagemService.resetDefaultState()
    $scope.viagem.methods.searchWithGQuery();

    $scope.buscarProxy = function(param){
        $scope.viagem.methods.searchWithGQuery(param);
        $scope.page = 1;
    }

    var config = {
        offset: 10,
        timer: 100,
        delay: 3000,
        alowDismiss: true,
        animationEnter: 'animated fadeInRightBig',
        animationExit: 'animated fadeOutRight'
    }

    $scope.viagem.on('deleteSuccess', () => {
        $gmdAlert.success('Sucesso!', 'Registro deletado com sucesso!', 3000)
        $scope.viagem.methods.searchWithGQuery();
    })

    $scope.tableConfig = {
        columns: 'rota ,button',
        checkbox: true,
        empty: {
            enabled: true
        },
        materialTheme: true,
        selection: 'single',
        columnsConfig: [{
            name: 'rota',
            title: '<span gumga-translate-tag="viagem.nome"> rota </span>',
            content: '<span class="captalize">{{$value.nome}}</span>',
            sortField: 'rota'
        }, {
            name: 'button',
            title: ' ',
            content: `<span class="pull-right">
                    <a class="btn btn-xs gmd btn-primary" ui-sref="viagem.edit({id: $value.id })">
                      <i class="material-icons">edit</i>
                    </a>
                  </span>`
        }]
    }
};
module.exports = ViagemListController