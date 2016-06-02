/**
 * Created by rrjollol on 02.06.2016.
 */
/// <reference path='../_all.ts' />
/**
 * This module defines the config function for the Angular bootstrapping
 */
((): void => {
    'use strict';

    angular
        .module('home', [])
        .config(config);

    /**
     * Define the injected services or components
     * @type {Array}
     */
    config.$inject = ['$stateProvider'];
    /**
     * Will initialize the configuration for the app
     * @param $stateProvider
     */
    function config($stateProvider: ng.ui.IStateProvider): void {

        //About route
        var home:ng.ui.IState = <ng.ui.IState> {
            url: '/home',
            //  controller:'AboutCtrl',
            controllerAs:'vm',
            templateUrl: '/app/home/home.tpl.html',
        };

        $stateProvider.state('home', home);

    }

})();
