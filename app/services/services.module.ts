/// <reference path='../_all.ts' />
/**
 * The services  module.
 *
 * @type {angular.Module}
 */
module registration {
    'use strict';

    angular.module('services', [])
        .controller('GuestbookService', services.GuestbookService);
}
