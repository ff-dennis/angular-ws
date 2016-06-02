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
        'ui.router',

    /**Internal modules **/
        'home',
        'about',
        'guestbook',
        'registration'
    ]).
        config(config);

    config.$inject = ['$urlRouterProvider'];

    /**
     * Will initialize the configuration for the app
     * @param $urlRouterProvider
     */
    function config($urlRouterProvider:ng.ui.IUrlRouterProvider):void {
        $urlRouterProvider.otherwise("/home");
    }
}
