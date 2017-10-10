(function (angular) {
    "use strict";

    angular.module("appRunner").config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function config($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider.state('root', {
            url: '/',
            templateUrl: 'app/components/common/header.html',
            controller: 'headerController'
        }).state('root.home', {
            url: ':top',
            templateUrl:'app/components/home/home.html',
            controller: 'homeController',
            controllerAs: 'vm'
        });
    }
})(angular);