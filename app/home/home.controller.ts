/// <reference path='../_all.ts' />
module home {
    'use strict';
    /**
     * The controller of home feature:
     */
    export class HomeCtrl {
        myVariable:string;
        myArray:string[] = [];
        myBoolean:boolean;
        myName:string;
        dennis:about.IPerson = new about.Webmaster("Dennis");
        entryExample:guestbook.IEntry;

        // $inject annotation.
        // It provides $injector with information about dependencies to be injected into constructor
        // it is better to have it close to the constructor, because the parameters must match in count and type.
        // See http://docs.angularjs.org/guide/di
        public static $inject = [
            '$scope'
        ];
        // dependencies are injected via AngularJS $injector
        // controller's name is registered in Application.ts and specified from ng-controller attribute in index.html
        constructor(
            private scope: IHomeScope
        ) {
            console.log("constructor HomeCtrl");

            this.myVariable = 'Set by controllers constructor';

            scope.$watch( () => this.myBoolean, (newValue:any, oldValue:any) => {
                console.log("Neuer Wert:", newValue);
            });

            this.entryExample = <guestbook.IEntry> {};
            this.entryExample.content = "Eine wirklich sehr hübsche Seite!";
            this.entryExample.userName = "Dennis";
        }

        resetMyVariable():void {
            this.myVariable = "";
        }

        setMyVariable(newValue:string):void {
            this.myVariable = newValue;
        }

        initMyArray():void {
            this.myArray = ["Frankfurt", "München", "Hamburg", "Nürnberg"];
        }

        addToMyArray(newCity:string):void {
            this.myArray.push(newCity);
        }

        hasCities():boolean {
            return this.myArray && this.myArray.length > 0
        }
    }

}
