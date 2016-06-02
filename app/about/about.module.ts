/// <reference path='../_all.ts' />
/**
 * The main app module.
 *
 * @type {angular.Module}
 */
module about {
    'use strict';
    angular.module('about', ['ui.router'])
        .controller('AboutCtrl',  about.AboutCtrl);


}
