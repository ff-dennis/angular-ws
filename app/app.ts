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

        /**Internal modules **/
        'home',
        'about',
        'guestbook'
    ]).
        config(config);

    config.$inject = ['$routeProvider'];
    function config($routeProvider:angular.route.IRouteProvider) {
        console.log("run app config ...");
        $routeProvider.
            when('/home', {
                controller: 'HomeCtrl',
                controllerAs: 'vm',
                templateUrl: 'home/home.tpl.html'
            }).
            otherwise('home');
    }
}
