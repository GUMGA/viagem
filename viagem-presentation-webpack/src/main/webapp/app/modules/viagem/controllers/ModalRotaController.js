ModalRotaController.$inject = ['$scope', 'gumgaController', '$uibModal', '$uibModalInstance', 'entity', 'DestinoService', 'RotaService']

function ModalRotaController($scope, gumgaController, $uibModal, $uibModalInstance, entity, DestinoService, RotaService) {
  $scope.rota = {}
  $scope.rota.data = angular.copy(entity) || {}

  gumgaController.createRestMethods($scope, RotaService, 'rotas')

  $scope.searchRoute = function(param){
      param = param || '';
      return $scope.rotas.methods.asyncSearchWithGQuery(
          new GQuery(new Criteria('obj.nome',ComparisonOperator.CONTAINS, param)
              .addIgnoreCase().addTranslate()))
  }

  $scope.ok = (obj) => {
    $uibModalInstance.close(obj)
  }

  $scope.cancel = () => {
    if ($scope.RotaForm.$dirty) {
      var modal = $uibModal.open({
        template: `<div>
                      <section class="modal-body">
                        <h4>Deseja sair sem salvar as alterações?</h4>
                      </section>
                      <div class="modal-footer">
                        <button class="btn btn-default" ng-click="handleClose(false)">Não</button>
                        <button class="btn btn-default" ng-click="handleClose(true)">Sim</button>
                      </div>
                    </div>`,
        backdrop: false,
        keyboard: false,
        size: 'md',
        controller: ($scope, $uibModalInstance) => {
          $scope.handleClose = (_boolean) => {
            _boolean ? $uibModalInstance.close(true) : $uibModalInstance.close(false)
          }
        }
      })

      modal.result.then((_boolean) => {
        if (_boolean) {
          $uibModalInstance.dismiss('cancel')
        }
      })
      return 0
    }
    $uibModalInstance.dismiss('cancel')
  }
};
module.exports = ModalRotaController