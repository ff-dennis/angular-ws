/// <reference path='../_all.ts' />
/**
 * The registration  module.
 *
 * @type {angular.Module}
 */
module registration {
    'use strict';

    angular.module('registration', [])
        .controller('RegistrationCtrl', registration.RegistrationCtrl);
}
