/// <reference path='../_all.ts' />
module guestbook {
    'use strict';

    /**
     * The controller of guestbook feature:
     */
    export class GuestbookCtrl {
        allEntries:IGuestbookEntry[] = [];
        newEntry:IGuestbookEntry = <IGuestbookEntry>{};

        constructor() {
            console.log("constructor GuestbookCtrl");
        }

        saveEntry():void {
            console.log("Save Entry", this.newEntry);
            this.allEntries.unshift(this.newEntry);
            this.newEntry = <IGuestbookEntry>{};
        }
    }
}
