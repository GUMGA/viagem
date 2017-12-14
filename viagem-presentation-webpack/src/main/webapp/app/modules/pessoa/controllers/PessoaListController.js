PessoaListController.$inject = ['$scope', 'PessoaService', 'gumgaController', '$gmdAlert']

function PessoaListController($scope, PessoaService, gumgaController, $gmdAlert) {
    gumgaController.createRestMethods($scope, PessoaService, 'pessoa', 'page')

    PessoaService.resetDefaultState()
    $scope.pessoa.methods.searchWithGQuery();

    $scope.buscarProxy = function(param){
        $scope.pessoa.methods.searchWithGQuery(param);
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

    $scope.pessoa.on('deleteSuccess', () => {
        $gmdAlert.success('Sucesso!', 'Registro deletado com sucesso!', 3000)
        $scope.pessoa.methods.searchWithGQuery();
    })

    $scope.tableConfig = {
        columns: 'nome, email, button',
        checkbox: true,
        materialTheme: true,
        columnsConfig: [
            {
                name: 'nome',
                title: '<span gumga-translate-tag="pessoa.nome"> nome </span>',
                content: '<span class="captalize">{{$value.nome}}</span>',
                sortField: 'nome',
                size: 'col-md-5'
            },
            {
                name: 'email',
                title: '<span gumga-translate-tag="pessoa.email"> email </span>',
                content: `<span>{{$value.email.value}}</span>
                    <span ng-if="$value.email == null" style="border-radius:10px" class="label label-warning">Sem e-mail cadastrado</span>`,
                sortField: 'email',
                size: 'col-md-6'
            },
            {
                name: 'button',
                title: ' ',
                content: `<span class="pull-right">
                      <a class="btn btn-xs gmd btn-primary" ui-sref="pessoa.edit({id: $value.id })">
                        <i class="material-icons">edit</i>
                      </a>
                    </span>`,
                size: 'col-md-1'
            }
        ]
    }
};
module.exports = PessoaListController