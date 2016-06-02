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
        .module('about', [])
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
        var about:ng.ui.IState = <ng.ui.IState> {
            url: '/about',
            templateUrl: '/app/about/about.tpl.html',
        };

        $stateProvider.state('about', about     );

    }

})();
