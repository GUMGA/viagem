FornecedorListController.$inject = ['$scope', 'FornecedorService', 'gumgaController', '$gmdAlert']

function FornecedorListController($scope, FornecedorService, gumgaController, $gmdAlert) {
    gumgaController.createRestMethods($scope, FornecedorService, 'fornecedor', 'page')

    FornecedorService.resetDefaultState()
    $scope.fornecedor.methods.searchWithGQuery();

    $scope.buscarProxy = function(param){
        $scope.fornecedor.methods.searchWithGQuery(param);
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

    $scope.fornecedor.on('deleteSuccess', () => {
        $gmdAlert.success('Sucesso!', 'Registro deletado com sucesso!', 3000)
        $scope.fornecedor.methods.searchWithGQuery();
    })

    $scope.tableConfig = {
        columns: 'nome, email, documento, tipoPessoa, button',
        checkbox: true,
        materialTheme: true,
        empty: {
            enabled: true
        },
        columnsConfig: [
            {
                name: 'nome',
                title: '<span gumga-translate-tag="fornecedor.nome"> nome </span>',
                content: '<span class="captalize">{{$value.nome}}</span>',
                sortField: 'nome',
                size: 'col-md-2'
            },
            {
                name: 'email',
                title: '<span gumga-translate-tag="fornecedor.email"> email </span>',
                content: '<span>{{$value.email.value}}</span>',
                sortField: 'email',
                size: 'col-md-4'
            },
            {
                name: 'documento',
                title: '<span gumga-translate-tag="fornecedor.documento"> documento </span>',
                content: `<span ng-if="$value.documento.length== 11 ">{{$value.documento | gumgaGenericFilter: "cpf"}}</span> 
                    <span ng-if="$value.documento.length== 14 ">{{$value.documento | gumgaGenericFilter: "cnpj"}}</span> 
                    <span ng-if="$value.documento.length== 0 " style="border-radius:10px" class="label label-warning"> Sem documento cadastrado</span>`,
                sortField: 'documento',
                size: 'col-md-3'
            },
            {
                name: 'tipoPessoa',
                title: '<span gumga-translate-tag="fornecedor.tipoPessoa"> tipoPessoa </span>',
                content: '<span style="border-radius:10px" class="label label-info">{{$value.tipoPessoa}}</span>',
                sortField: 'tipoPessoa',
                size: 'col-md-2'
            },
            {
                name: 'button',
                title: ' ',
                content: `<span class="pull-right">
                      <a class="btn btn-xs gmd btn-primary" ui-sref="fornecedor.edit({id: $value.id })">
                       <i class="material-icons">edit</i>
                      </a>
                    </span>`,
                size: 'col-md-1'
            }
        ]
    }
};
module.exports = FornecedorListController