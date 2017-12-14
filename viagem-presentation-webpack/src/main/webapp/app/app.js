'use strict'

require('./import-libs');
require("./import-styles");
require("./import-modules");

angular.module('gumga.core', [
    'gumga.rest',
    'gumga.controller',
    'gumga.alert',
    'gumga.webstorage',
    'gumga.manytoone',
    'gumga.address',
    'gumga.translate',
    'gumga.mask',
    'gumga.upload',
    'gumga.customfields',
    'gumga.formbuttons',
    'gumga.counter',
    'gumga.breadcrumb',
    'gumga.confirm',
    'gumga.onetomany',
    'gumga.populate',
    'gumga.manytomany',
    'gumga.form',
    'gumga.queryfilter',
    'gumga.genericfilter',
    'gumga.list',
    'gumga.login',
    'gumga.layout',
    'gumga.date',
    'gumga.queryaction',
    'gumga.myAccountEmbedded'
  ]);

angular.module('app.core', [
    'ui.router',
    'gumga.core',
    'ngSanitize',
    'app.login',
    'app.gumgatagdefinition',
    'app.gumgacustomfield',
    'app.pessoa',
    'app.colaborador',
    'app.fornecedor',
    'app.viagem',
    'app.rota',
    'app.movimento',
    'app.destino',
    'app.welcome',
    'base.core',
    'app.studio'
    // FIMINJECTIONS
  ])
    .config(function ($stateProvider, $urlRouterProvider, $httpProvider, $injector, $gumgaTranslateProvider, $gmdThemeProvider) {
        
        $gmdThemeProvider.setTheme('africa');

        let templateUrl = 'app/modules/base/base/base.html';
        $urlRouterProvider.otherwise('login/log');

        $stateProvider
            .state('login', {
                abstract: true,
                url: '/login',
                data: {
                    id: 0
                },
                template: '<div ui-view style="height: 100%;"></div>'
            })
            .state('welcome', {
                url: '/welcome',
                data: {
                    id: 0
                },
                templateUrl: templateUrl
            })
            .state('gumgatagdefinition', {
                url: '/gumgatagdefinition',
                templateUrl: 'app/modules/gumgatagdefinition/views/base.html'
            })
            .state('gumgacustomfield', {
                data: {
                    id: 1
                },
                url: '/gumgacustomfield',
                templateUrl: templateUrl
            })
            .state('pessoa', {
                data: {
                    id: 1
                },
                url: '/pessoa',
                templateUrl: templateUrl
            })

            .state('colaborador', {
                data: {
                    id: 1
                },
                url: '/colaborador',
                templateUrl: templateUrl
            })

            .state('fornecedor', {
                data: {
                    id: 1
                },
                url: '/fornecedor',
                templateUrl: templateUrl
            })

            .state('viagem', {
                data: {
                    id: 1
                },
                url: '/viagem',
                templateUrl: templateUrl
            })

            .state('rota', {
                data: {
                    id: 1
                },
                url: '/rota',
                templateUrl: templateUrl
            })

            .state('movimento', {
                data: {
                    id: 1
                },
                url: '/movimento',
                templateUrl: templateUrl
            })

            .state('destino', {
                data: {
                    id: 1
                },
                url: '/destino',
                templateUrl: templateUrl
            })
            .state('studio', {
                data: {
                    id: 1
                },
                url: '/studio',
                templateUrl: templateUrl
            })

        // FIMROUTE

        $httpProvider.interceptors.push(function ($q, $injector, $timeout, $filter, $gmdAlert) {
            return {
                'request': function (config) {
                    let user = JSON.parse(window.sessionStorage.getItem('user'));
                    if(user){
                        config.headers['gumgaToken'] = user.token;
                    }
                    return config;
                },
                'responseError': function (rejection) {
                    let $state = $injector.get('$state')
                    let error = {
                        title: rejection.data.response || rejection.data.code,
                        message: rejection.data.response ? rejection.statusText : rejection.data.details,
                        errorCode: (rejection.data.data) ? rejection.data.data.ErrorCode : null
                    }
                    if (error.title === 'NO_USER' || error.title === 'BAD_PASSWORD') {
                        error.message = 'Usuario ou senha está incorreto!'
                    }
                    if (error.title === 'OPERATION_NOT_ALLOWED') {
                        error.message = rejection.data.operation
                    }
                    if (error.title === 'ConstraintViolation') {
                        error.message = 'Estes dados não podem ser deletados, pois estão sendo utilizado por outros registros.'
                    }
                    $gmdAlert.error($filter('gumgaTranslate')(error.title, 'exception'), error.message, 3000);
                    rejection.status === 403 && ($state.go('login.log'))
                    return $q.reject(rejection)
                }
            }
        })
    })