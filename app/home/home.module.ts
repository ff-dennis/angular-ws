/// <reference path='../_all.ts' />
/**
 * The main app module.
 *
 * @type {angular.Module}
 */
module home {
    'use strict';
    angular.module('home', [])
        .controller('HomeCtrl', home.HomeCtrl);
}
