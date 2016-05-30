/// <reference path='../_all.ts' />

module about {
    'use strict';

    /**
     * The directive to display a person:
     */
    export class PersonDirective implements ng.IDirective {
        template:string = "<p data-ng-bind='vm.person.name'>Person directive</p><button class='btn' ng-click='vm.likePerson()'>Like!</button>";
        bindToController = true;
        controller = PersonDirectiveController;
        controllerAs= "vm";

        scope = {
            //name: '@'
            person: '='
        };

        constructor() {
            console.log("constructor directive person");
        }
    }

    export class PersonDirectiveController {
        public person:IPerson;

        public static $inject = ['$window'];
        constructor(private windowService:ng.IWindowService) {
            console.log("constructor PersonDirectiveController", this.person);
        }

        likePerson():void {
            this.person.likeMe();
            this.windowService.alert("Person geliked!");
        }
    }

    export class Webmaster implements IPerson {
        name:string;
        dayOfBirth:Date;
        likes:number = 0;

        constructor(name:string) {
            this.name = name;
        }

        public likeMe():void {
            this.likes++;
            console.log('Person has now ' + this.likes + ' Likes');
        }
    }
}
