DestinoListController.$inject = ['$scope', 'DestinoService', 'gumgaController', '$gmdAlert', 'BaseService']

function DestinoListController($scope, DestinoService, gumgaController, $gmdAlert, BaseService) {
    gumgaController.createRestMethods($scope, DestinoService, 'destino', 'page')
    DestinoService.resetDefaultState();
    $scope.destino.methods.searchWithGQuery();

    $scope.buscarProxy = function(param){
        $scope.destino.methods.searchWithGQuery(param);
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

    $scope.destino.on('deleteSuccess', () => {
        $gmdAlert.success('Sucesso!', 'Registro deletado com sucesso!', 3000)
        $scope.destino.methods.searchWithGQuery();
    })


    $scope.formatarTelefone = (telefone) => {
        return BaseService.formatTelefone(telefone)
    }


    $scope.tableConfig = {
        columns: 'nome, telefone, button',
        checkbox: true,
        headers: true,
        materialTheme: true,
        selection: 'multi',
        empty: {
            enabled: true
        },
        columnsConfig: [
            {
                name: 'nome',
                title: '<span gumga-translate-tag="destino.destino"> nome </span>',
                content: '<span class="captalize">{{$value.nome}}</span>',
                sortField: 'nome',
                size: 'col-md-6'
            },
            {
                name: 'telefone',
                title: '<span gumga-translate-tag="destino.telefone"> telefone </span>',
                content: `<span>{{$parent.$parent.formatarTelefone($value.telefone)}}</span>
                    <span ng-if="$value.telefone == null" style="border-radius:10px" class="label label-warning"> Sem telefone cadastrado</span>`,
                sortField: 'nome',
                size: 'col-md-5'
            },
            {
                name: 'button',
                title: ' ',
                content: `<span class="pull-right">
                     <a class="btn btn-xs gmd btn-primary" ui-sref="destino.edit({id: $value.id })">
                      <i class="material-icons">edit</i>
                     </a>
                    </span>`,
                size: 'col-md-1'
            }]
    }
}

module.exports = DestinoListController