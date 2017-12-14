StudioListController.$inject = ['$scope', 'StudioService', 'gumgaController', '$gmdAlert', '$sce', '$compile', '$timeout']

function StudioListController($scope, StudioService, gumgaController, $gmdAlert, $sce, $compile, $timeout) {
  gumgaController.createRestMethods($scope, StudioService, 'studio')
  StudioService.resetDefaultState()
  $scope.studio.execute('get')
  $scope.load = true

  StudioService.get().then((response) => {
    $scope.studioLink = response.data.values[0]
    if ($scope.studioLink != undefined) {
      var iframe = document.createElement('iframe')
      iframe.style.height = '760px'
      iframe.style.width = '100%'
      iframe.src = $scope.studioLink.nome
      iframe.onload = () => {
        $timeout(() => {
          $scope.load = false
        })
      }
      let container = angular.element(document.getElementById('iframe-container'))
      container.replaceWith($compile(iframe)($scope))
    } else {
      $scope.load = false
      $scope.semUrl = true
    }
  })
};
module.exports = StudioListController