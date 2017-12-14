RotaListController.$inject = ['$scope', 'RotaService', 'gumgaController', '$gmdAlert']

function RotaListController($scope, RotaService, gumgaController, $gmdAlert) {
    gumgaController.createRestMethods($scope, RotaService, 'rota', 'page')
    RotaService.resetDefaultState()
    $scope.rota.methods.searchWithGQuery();

    $scope.buscarProxy = function(param){
        $scope.rota.methods.searchWithGQuery(param);
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

    $scope.rota.on('deleteSuccess', () => {
        $gmdAlert.success('Sucesso!', 'Registro deletado com sucesso!', 3000)
        $scope.rota.methods.searchWithGQuery();
    })

    $scope.tableConfig = {
        columns: 'nome, destino, button',
        checkbox: true,
        selection: 'single',
        materialTheme: true,
        empty: {
            enabled: true
        },
        columnsConfig: [
            {
                name: 'nome',
                title: '<span gumga-translate-tag="rota.nome"> nome </span>',
                content: '<span class="captalize">{{$value.nome}}</span>',
                sortField: 'nome',
                size: 'col-md-5'
            },
            {
                name: 'destino',
                title: '<span gumga-translate-tag="rota.destino"> destino </span>',
                content: '<span class="captalize">{{$value.destino.nome}}</span>',
                sortField: 'destino',
                size: 'col-md-6'
            },
            {
                name: 'button',
                title: ' ',
                content: `<span class="pull-right">
                      <a class="btn btn-xs gmd btn-primary" ui-sref="rota.edit({id: $value.id })">
                        <i class="material-icons">edit</i>
                      </a>
                    </span>`,
                size: 'col-md-1'
            }]
    }
};
module.exports = RotaListController