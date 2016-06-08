/// <reference path='../_all.ts' />
module home {
    'use strict';
    /**
     * The controller of home feature:
     */
    export class HomeCtrl {
        myVariable:string;
        myBool:boolean;
        //newCity:string;
        cities:string[] = [];
        persons:IPerson[] = [];
        myInputValue:string;

        public static $inject = ['$scope'];
        constructor(private scope: IHomeScope) {
            console.log("constructor HomeCtrl");
            this.myVariable =" Init by Constructor";
            this.initPersonsArray();

            scope.$watch(()=>this.myBool, function () {
                console.log("Der Wert hat sich geändert!");
            });
        }

        addNewCity(newCity:string):void {
            this.cities.push(newCity);
            console.log("add city", newCity, this.cities);
        }

        initPersonsArray():void {
            let dennis:home.IPerson = <home.IPerson> { firstname: "Dennis", lastname:"Petrick"};
            let olsi:IPerson = <home.IPerson> { firstname: "Olsi", lastname:"Rrjolli"};
            this.persons.push(dennis);
            this.persons.push(olsi);
        }

    }

}
