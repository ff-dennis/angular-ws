/// <reference path='_all.ts' />
/**
 * The main app module.
 *
 * @type {angular.Module}
 */
module app {
    'use strict';
    angular.module('app', [
    /** angular modules **/
        'ngMessages',

    /** external modules **/
        'ui.router',

    /** internal modules **/
        'home',
        'registration',
        'guestbook',

        'services'
    ]).
    config(config);


    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function config($stateProvider:ng.ui.IStateProvider, $urlRouterProvider:ng.ui.IUrlRouterProvider):void {
        console.log("run app config ...");

        var home:ng.ui.IState = <ng.ui.IState> {
            url: '/home',
            controller: 'HomeCtrl',
            controllerAs: 'vm',
            templateUrl: 'home/home.tpl.html'
        };

        var registration:ng.ui.IState = <ng.ui.IState>{
            url: '/registration',
            controller: 'RegistrationCtrl',
            controllerAs: 'vm',
            templateUrl: 'registration/registration.tpl.html'
        };

        var guestbook:ng.ui.IState = <ng.ui.IState>{
            url: '/guestbook',
            controller: 'GuestbookCtrl',
            //controller: 'GuestbookHttpCtrl',
            controllerAs: 'vm',
            templateUrl: 'guestbook/guestbook.tpl.html'
        };

        $urlRouterProvider.otherwise("/home");

        $stateProvider.state('home', home)
            .state('registration', registration)
            .state('guestbook', guestbook);
    }
}
