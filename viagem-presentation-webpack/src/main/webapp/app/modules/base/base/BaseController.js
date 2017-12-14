BaseController.$inject = ['$timeout', '$sce', 'BaseService', '$state', '$scope', 'gumgaController', '$filter', '$compile', 'GumgaWebStorage', '$gmdTheme']

function BaseController($timeout, $sce, BaseService, $state, $scope, gumgaController, $filter, $compile, GumgaWebStorage, $gmdTheme) {
    // document.querySelector('.gumga-layout nav.gl-nav').classList.remove('collapsed')
    $scope.keysJsonUrl = []
    $scope.gumgaMenu = []
    $scope.organizations = []

    $scope.setTheme = function (theme) {
        $gmdTheme.setTheme(theme, true)
    }

    $scope.info = GumgaWebStorage.getSessionStorageItem('user')

    $scope.orgAtual = JSON.parse(sessionStorage.getItem('user'))

    BaseService.getGumgaMenu()
        .then((data) => {
            $scope.gumgaMenu = data.data
        })
    BaseService.getKeysJsonUrl()
        .then((data) => {
            $scope.keysJsonUrl = data.data
        })

    $scope.navCollapse = () => {
        document.querySelector('.gumga-layout nav.gl-nav')
            .classList.toggle('collapsed')
    }

    document.onclick = (evt) => {
        let ignoreElement = 'nav'
        if (evt.target.localName == ignoreElement || (evt.target.offsetParent && evt.target.offsetParent.localName == ignoreElement)) {
            return
        }
        if (document.querySelector('.gumga-layout nav.gl-nav')) {
            document.querySelector('.gumga-layout nav.gl-nav').classList.remove('collapsed')
        }
    }

    BaseService.listOrganizations().then((result) => {
        $scope.organizations = result.data
    })

    $scope.changeOrganization = (organization) => {
        BaseService.changeOrganization(organization.id).then((newOrganization) => {
            let token = newOrganization.data.token || JSON.parse(sessionStorage.getItem('user')).token
            newOrganization.data.token = token
            sessionStorage.setItem('user', JSON.stringify(newOrganization.data))
            location.reload(true)
        })
    }

    $scope.logout = () => {
        $scope.$on('$destroy', () => {
            BaseService.closeEmitter(BaseService.emitterCommand)
        })
        $state.go('login.log')
    }
}

module.exports = BaseController