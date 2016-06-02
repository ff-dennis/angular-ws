/// <reference path='../_all.ts' />

module guestbook {
    'use strict';

    /**
     * The directive to display a guestbook entry:
     */
    export class EntryDirective implements ng.IDirective {
        templateUrl = '/app/guestbook/gb-entry.tpl.html';
        bindToController = true;
        controller = EntryDirectiveController;
        controllerAs = "vm";

        scope = {
            entry: '='
        };
        public static $inject = ['$scope', '$http']; //Inject GuestbookService


        //scope und $http backend init
        constructor() {
            console.log("constructor directive person");
        }
    }

    export class EntryDirectiveController {
        public entry:IEntry;

        constructor() {
            console.log("constructor EntryDirectiveController", this.entry);
        }

        getEntries() {
            /**
             * call get entries from service
             */
        }

    }
}
