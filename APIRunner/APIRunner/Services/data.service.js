(function (angular) {
    "use strict";

    //TODO: Transform to a factory
    angular.module('appRunner').provider('dataService', [DataServiceProvider]); // se crea el servicio dataService, que lo crea DataServiceProvider

    function DataServiceProvider() { // Crea un dataService
        this.serviceUrl = null;
        //this.setConfig = function (serviceUrl) { // Por si se le llama desde fuera del proyecto
        //    this.serviceUrl = serviceUrl;
        //};
        this.$get = get;

        get.$inject = ['$http'];
        function get($http) {
            return new DataService($http, this.serviceUrl);
        }
    }

    function DataService($http, serviceUrl) {
        //Public declarations
        this.getRunners = getRunners;
        this.getRunner  = getRunner;

        function getRunners(vm) {
            $http.get("api/Runners").then(function (response) {
                vm.runners = response.data;
            });
        }

        function getRunner(vm, i) {
            $http.get("api/Runners/" + i).then(function (response) {
                vm.runnerTop = response.data;
            });
        }
    }

})(angular);