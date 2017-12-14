ColaboradorListController.$inject = ['$scope', 'ColaboradorService', 'gumgaController', '$gmdAlert']

function ColaboradorListController($scope, ColaboradorService, gumgaController, $gmdAlert) {
    gumgaController.createRestMethods($scope, ColaboradorService, 'colaborador', 'page')

    ColaboradorService.resetDefaultState()
    $scope.colaborador.methods.searchWithGQuery();

    $scope.buscarProxy = function(param){
        $scope.colaborador.methods.searchWithGQuery(param);
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

    $scope.colaborador.on('deleteSuccess', () => {
        $gmdAlert.success('Sucesso!', 'Registro deletado com sucesso!', 3000);
        $scope.colaborador.methods.searchWithGQuery();
    })

    $scope.tableConfig = {
        columns: 'nome, cargo ,button',
        checkbox: true,
        materialTheme: true,
        empty: {
            enabled: true
        },
        selection: 'single',
        columnsConfig: [{
            name: 'nome',
            title: '<span gumga-translate-tag="colaborador.nome"> nome </span>',
            content: '<span class="captalize">{{$value.nome}}</span>',
            sortField: 'nome',
            size: 'col-md-6'
        },
        {
            name: 'cargo',
            title: '<span gumga-translate-tag="colaborador.cargo"> cargo</span>',
            content: '<span class="captalize">{{$value.cargo}}</span>',
            sortField: 'cargo',
            size: 'col-md-5'
        },
        {
            name: 'button',
            title: ' ',
            content: `<span class="pull-right">
                   <a class="btn btn-xs gmd btn-primary" ui-sref="colaborador.edit({id: $value.id })">
                    <i class="material-icons">edit</i>
                   </a>
                  </span>`,
            size: 'col-md-1'
        }]
    }
};
module.exports = ColaboradorListController