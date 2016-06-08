/// <reference path='../_all.ts' />
module guestbook {
    'use strict';
    angular.module('guestbook', [])
        .controller('GuestbookCtrl', guestbook.GuestbookCtrl)
        .controller('GuestbookHttpCtrl', guestbook.GuestbookHttpCtrl)
        .directive('gbEntry', () => new guestbook.GuestbookEntryDirective());
}
