/// <reference path='../_all.ts' />
/**
 * The main app module.
 *
 * @type {angular.Module}
 */
module about {
    'use strict';
    angular.module('about', [])
        .directive('psPerson', () => new about.PersonDirective());
}
