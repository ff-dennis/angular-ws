/// <reference path='_all.ts' />
/**
 * The main app module.
 *
 * @type {angular.Module}
 */
module app {
    'use strict';
    angular.module('app', [
    /**External modules **/
        'ngRoute',
        'ui.router',

    /**Internal modules **/
        'home',
        'about',
        'guestbook',
        'registration'
    ]).
        config(config);
        config.$inject = ['$stateProvider','$urlRouterProvider'];


    function config($stateProvider:ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider ):void {
        console.log("run app config ...");

        var home:ng.ui.IState = <ng.ui.IState> {
            url: '/home',
            controller: 'HomeCtrl',
            controllerAs: 'vm',
            templateUrl: 'home/home.tpl.html'
        };

        var about:ng.ui.IState = <ng.ui.IState> {
            url: '/about',
            controller: 'AboutCtrl',
            controllerAs: 'vm',
            templateUrl: 'about/about.tpl.html'
        };

        var aboutDetail:ng.ui.IState = <ng.ui.IState> {
            url: '/about/:name',
            controller: 'AboutDetailCtrl',
            controllerAs: 'vm',
            templateUrl: 'about/about-detail.tpl.html'
        };

        var registration:ng.ui.IState = <ng.ui.IState> {
            url: '/registration',
            templateUrl: '/app/registration/registration.tpl.html',
            controller: "RegistrationCtrl",
            controllerAs: 'vm'
        };

        $urlRouterProvider.otherwise("/home");



        /**
         * TODO Guestbook
         */

        $stateProvider.state('home', home)
            .state('about', about)
            .state('registration', registration);
    }
}
