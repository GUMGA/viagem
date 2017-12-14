'use strict'
requirejs.config({

  paths: {
    'angular': 'bower_components/angular/angular.min',
    'angular-mocks': 'node_modules/angular-mocks/angular-mocks',
    'angular-bootstrap': 'bower_components/angular-bootstrap/ui-bootstrap-tpls.min',
    'angular-ui-router': 'bower_components/angular-ui-router/release/angular-ui-router.min',
    'angular-sanitize': 'bower_components/angular-sanitize/angular-sanitize.min',
    'bootstrap': 'bower_components/bootstrap/dist/js/bootstrap.min',
    'jquery': 'bower_components/jquery/dist/jquery.min',
    'es5-sshim': 'bower_components/es5-shim/es5-shim.min',
    'notify': 'bower_components/remarkable-bootstrap-notify/dist/bootstrap-notify.min',
    'api-locations': 'app/apiLocations',
    'mousetrap-latest': 'bower_components/mousetrap-latest/mousetrap.min',
    'remarkable-bootstrap-notify': 'bower_components/remarkable-bootstrap-notify/dist/bootstrap-notify.min',
    'ngImgCrop': 'bower_components/ng-img-crop/compile/minified/ng-img-crop',
    'moment': 'bower_components/moment/min/moment.min',
    'gumga-layout': 'gumga-layout/gumga-layout.min',
    'gumga-login': 'bower_components/gumga-login/dist/gumga-login.min',
    'locale': 'i18n/angular-locale_pt-br',
    'angular-input-masks': 'bower_components/angular-input-masks/angular-input-masks.min',
    
    "gumga-rest-ng": "bower_components/gumga-rest/dist/gumga-rest.min",
    "gumga-controller-ng": "bower_components/gumga-controller-ng/dist/gumga-controller.min",
    "gumga-alert-ng": "bower_components/gumga-alert-ng/dist/gumga-alert.min",
    "gumga-web-storage-ng": "bower_components/gumga-web-storage-ng/dist/gumga-web-storage.min",
    "gumga-many-to-one-ng": "bower_components/gumga-many-to-one-ng/dist/gumga-many-to-one.min",
    "gumga-address-ng": "bower_components/gumga-address-ng/dist/gumga-address.min",
    "gumga-translate-ng": "bower_components/gumga-translate-ng/dist/gumga-translate",
    "gumga-mask-ng": "bower_components/gumga-mask-ng/dist/gumga-mask.min",
    "gumga-upload-ng": "bower_components/gumga-upload-ng/dist/gumga-upload.min",
    "gumga-custom-fields-ng": "bower_components/gumga-custom-fields-ng/dist/gumga-custom-fields.min",
    "gumga-form-buttons-ng": "bower_components/gumga-form-buttons-ng/dist/gumga-form-buttons.min",
    "gumga-counter": "bower_components/gumga-counter/dist/gumga-counter.min",
    "gumga-breadcrumb": "bower_components/gumga-breadcrumb/dist/gumga-breadcrumb.min",
    "gumga-confirm": "bower_components/gumga-confirm/dist/gumga-confirm.min",
    "gumga-one-to-many-ng": "bower_components/gumga-one-to-many-ng/dist/gumga-one-to-many.min",
    "gumga-populate-ng": "bower_components/gumga-populate-ng/dist/gumga-populate.min",
    "gumga-many-to-many-ng": "bower_components/gumga-many-to-many-ng/dist/gumga-many-to-many.min",
    "gumga-form-ng": "bower_components/gumga-form-ng/dist/gumga-form.min",
    "gumga-generic-filter-ng": "bower_components/gumga-generic-filter-ng/dist/gumga-generic-filter.min",
    "gumga-query-filter-ng": "bower_components/gumga-query-filter-ng/dist/gumga-query-filter.min",
    "gumga-list-ng": "bower_components/gumga-list-ng/dist/gumga-list.min"
    
  },
  shim: {
    'angular': { exports: 'angular', deps: ['jquery'] },
    'angular-bootstrap': { deps: ['angular'] },
    'angular-sanitize': { deps: ['angular'] },
    'angular-ui-router': { deps: ['angular'] },
    'angular-mocks': { deps: ['angular'], exports: 'angular-mocks' },
    'bootstrap': { deps: ['jquery'] },
    'jquery-mask': { deps: ['jquery'] },
    'gumga-components': { deps: ['angular', 'angular-bootstrap', 'angular-ui-router', 'jquery', 'remarkable-bootstrap-notify', 'mousetrap-latest'] },
    'ngImgCrop': { deps: ['angular'] },
    'gumga-layout': { deps: ['angular', 'jquery', 'bootstrap'] },
    'moment': { deps: ['jquery'] },
    'angular-input-masks': { deps: ['angular', 'moment', 'jquery'] },
    'locale': { deps: ['angular', 'jquery'] },
    'gumga-login': { deps: ['angular', 'jquery', 'bootstrap'] },
    
    
    'gumga-rest-ng': { deps: ['angular'] },
    'gumga-controller-ng': { deps: ['angular'] },
    'gumga-alert-ng': { deps: ['angular'] },
    'gumga-web-storage-ng': { deps: ['angular'] },
    'gumga-many-to-one-ng': { deps: ['angular'] },
    'gumga-address-ng': { deps: ['angular'] },
    'gumga-translate-ng': { deps: ['angular'] },
    'gumga-mask-ng': { deps: ['angular'] },
    'gumga-upload-ng': { deps: ['angular'] },
    'gumga-custom-fields-ng': { deps: ['angular'] },
    'gumga-form-buttons-ng': { deps: ['angular'] },
    'gumga-counter': { deps: ['angular'] },
    'gumga-breadcrumb': { deps: ['angular'] },
    'gumga-confirm': { deps: ['angular'] },
    'gumga-one-to-many-ng': { deps: ['angular'] },
    'gumga-populate-ng': { deps: ['angular'] },
    'gumga-many-to-many-ng': { deps: ['angular'] },
    'gumga-form-ng': { deps: ['angular'] },
    'gumga-generic-filter-ng': { deps: ['angular'] },
    'gumga-query-filter-ng': { deps: ['angular'] },
    'gumga-list-ng': { deps: ['angular'] }

  },
  config: {
    moment: {
      noGlobal: true
    }
  }
})
