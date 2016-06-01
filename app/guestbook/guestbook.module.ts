/// <reference path='../_all.ts' />
/**
 * The main app module.
 *
 * @type {angular.Module}
 */
module guestbook {
    'use strict';
    angular.module('guestbook', [])
        .directive('gbEntry', () => new guestbook.EntryDirective());
}
