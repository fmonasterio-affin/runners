(function (angular) {
    "use strict";

    angular.module('appRunner').controller('homeController', homeController);

    homeController.$inject = ['$stateParams', '$http', 'dataService'];
    function homeController($stateParams, $http, dataService) {
        var vm = this;
        dataService.getRunners(vm);
        dataService.getRunner(vm, $stateParams.top)
        
    }
})(angular);