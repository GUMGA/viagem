LoginController.$inject = ['$scope', 'LoginService', '$uibModal', '$state']

function LoginController($scope, LoginService, $uibModal, $state) {

  $scope.onLogin = (user, organizations) => {
    $state.go('welcome.home');
  }

  $scope.configuration = {
      appURL : APILocation.apiLocation
  };

  LoginService.removeToken();

}
module.exports = LoginController;