/// <reference path='../_all.ts' />

module guestbook {
    export class GuestbookEntryDirective implements ng.IDirective {
        bindToController = true;
        controller = GuestbookEntryDirectiveController;
        controllerAs = "vm";

        templateUrl = "/app/guestbook/gb-entry.tpl.html";

        scope = {
            entry: '='
        };

        constructor() {
            console.log("GuestbookEntryDirective constructor")
        }
    }

    export class GuestbookEntryDirectiveController {
        entry:IGuestbookEntry;

        constructor() {
            console.log("GuestbookEntryDirectiveController constructor", this.entry);
        }
    }
}
