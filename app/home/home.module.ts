/// <reference path='../_all.ts' />
/**
 * The home module.
 *
 * @type {angular.Module}
 */
module home {
    'use strict';
    angular.module('home', [])
        .controller('HomeCtrl', home.HomeCtrl)
        .directive('psPerson', () => new home.PersonDirective());
}
