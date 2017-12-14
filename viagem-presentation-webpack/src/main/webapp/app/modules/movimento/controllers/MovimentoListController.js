MovimentoListController.$inject = ['$scope', 'MovimentoService', 'gumgaController', '$gmdAlert']

function MovimentoListController($scope, MovimentoService, gumgaController, $gmdAlert) {
    gumgaController.createRestMethods($scope, MovimentoService, 'movimento', 'page')

    MovimentoService.resetDefaultState()
    $scope.movimento.methods.searchWithGQuery();

    $scope.buscarProxy = function(param){
        $scope.movimento.methods.searchWithGQuery(param);
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

    $scope.movimento.on('deleteSuccess', () => {
        $gmdAlert.success('Sucesso!', 'Registro deletado com sucesso!', 3000)
        $scope.movimento.methods.searchWithGQuery();
    })

    $scope.tableConfig = {
        columns: 'viagem, fornecedor, valor, tipoMovimento ,button',
        checkbox: true,
        empty: {
            enabled: true
        },
        materialTheme: true,
        columnsConfig: [
            {
                name: 'viagem',
                title: '<span gumga-translate-tag="movimento.viagem"> viagem </span>',
                content: '<span class="captalize">{{$value.viagem.nome}}</span>',
                sortField: 'viagem',
                size: 'col-md-3'
            },
            {
                name: 'fornecedor',
                title: '<span gumga-translate-tag="movimento.fornecedor"> fornecedor </span>',
                content: '<span class="captalize">{{$value.fornecedor.nome}}</span>',
                sortField: 'fornecedor',
                size: 'col-md-3'
            },
            {
                name: 'valor',
                title: '<span gumga-translate-tag="movimento.valor"> valor </span>',
                content: '<span>{{$value.valor.value | currency: "R$"}}</span>',
                sortField: 'valor',
                size: 'col-md-2'
            },
            {
                name: 'tipoMovimento',
                title: '<span gumga-translate-tag="movimento.tipoMovimento"> tipoMovimento </span>',
                content: '<span style="border-radius:10px" class="label label-info">{{$value.tipoMovimento}}</span>',
                sortField: 'tipoMovimento',
                size: 'col-md-2'
            },
            {
                name: 'button',
                title: ' ',
                content: `<span class="pull-right">
                      <a class="btn btn-xs gmd btn-primary" ui-sref="movimento.edit({id: $value.id })">
                        <i class="material-icons">edit</i>
                      </a>
                    </span>`,
                size: 'col-md-1'
            }]
    }
};
module.exports = MovimentoListController