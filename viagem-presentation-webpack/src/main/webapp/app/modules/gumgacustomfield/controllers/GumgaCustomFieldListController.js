GumgaCustomFieldListController.$inject = ['$scope', 'GumgaCustomFieldService', 'gumgaController', '$gmdAlert']

function GumgaCustomFieldListController($scope, GumgaCustomFieldService, gumgaController, $gmdAlert) {
    gumgaController.createRestMethods($scope, GumgaCustomFieldService, 'gumgacustomfield', 'page')
    GumgaCustomFieldService.resetDefaultState()
    $scope.gumgacustomfield.methods.searchWithGQuery();

    $scope.buscarProxy = function(param){
        $scope.gumgacustomfield.methods.searchWithGQuery(param);
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

    $scope.gumgacustomfield.on('deleteSuccess', () => {
        $gmdAlert.success('Sucesso!', 'Registro deletado com sucesso!', 3000)
        $scope.gumgacustomfield.methods.searchWithGQuery();
    })

    $scope.tableConfig = {
        columns: 'clazz, name, button',
        checkbox: true,
        materialTheme: true,
        empty: {
            enabled: true
        },
        columnsConfig: [
            {
                name: 'clazz',
                title: '<span gumga-translate-tag="gumgacustomfield.clazz">clazz</span>',
                content: '<span>{{$value.clazz.replace("br.com.gumga.viagem.domain.model.", "")}}</span>',
                sortField: 'clazz',
                size: 'col-md-6'
            },
            {
                name: 'name',
                title: '<span gumga-translate-tag="gumgacustomfield.nameField">name</span>',
                content: '<span >{{$value.name}}</span>',
                sortField: 'name',
                size: 'col-md-5'
            },
            {
                name: 'button',
                title: ' ',
                content: `<span class="pull-right">
                      <a class="btn btn-xs gmd btn-primary" ui-sref="gumgacustomfield.edit({id: $value.id })">
                       <i class="material-icons">edit</i>
                      </a>
                    </span>`,
                size: 'col-md-1'
            }]
    }
};
module.exports = GumgaCustomFieldListController