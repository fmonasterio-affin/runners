(function (angular) {
    "use strict";

    angular.module('appRunner').config(config).run(run);

    //config.$inject = ['$mdThemingProvider', '$locationProvider', 'clientStorageServiceProvider'];
    config.$inject = ['$locationProvider'];
    function config($locationProvider) { // SE EJECUTA JUSTO ANTES DE CARGAR LA PÁGINA (providers)
        $locationProvider.html5Mode(true);
	}

    run.$inject = ['$state', '$window'];
    // run.$inject = ['$state', '$window', 'clientStorageService'];
    function run($state, $window) { // SE EJECUTA DESPUÉS DE CARGAR LA PÁGINA
	}
})(angular);