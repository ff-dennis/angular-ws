/// <reference path='../_all.ts' />
module guestbook {
    'use strict';

    /**
     * The controller of guestbook feature using http service via GuestbookService
     */
    export class GuestbookHttpCtrl {
        allEntries:IGuestbookEntry[] = [];
        newEntry:IGuestbookEntry = <IGuestbookEntry>{};

        public static $inject = ['$http'];
        constructor(private guestbookService:services.IGuestbookService) {
            console.log("constructor GuestbookCtrl");
            this.readEntries();
        }

        saveEntry():void {
            console.log("Save Entry", this.newEntry);
            this.guestbookService.saveEntry(this.newEntry).then((savedEntry:IGuestbookEntry) => {
                console.log("Gästebuch Eintrag erfolgreich gespeichert!");
                this.allEntries.unshift(savedEntry);
                //Oder: Erneut GET ausführen.

                this.newEntry = <IGuestbookEntry>{};
            }, (error:any) => {
                console.log("Speichern fehlgeschlagen!");
            });
        }

        readEntries():void {
            this.guestbookService.getEntries().then( (entries:IGuestbookEntry[]) => {
                this.allEntries = entries;
            });
        }
    }
}
