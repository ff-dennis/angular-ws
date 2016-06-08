module home {

    export class PersonDirective implements ng.IDirective {
        bindToController = true;
        controller = PersonDirectiveController;
        controllerAs = "vm";

        template = "<p><span ng-bind='vm.person.firstname'></span> <span>{{vm.person.lastname}}</span><span> ({{vm.company}})</span></p>";

        scope = {
            company: '@', //one-way
            person: '=' //Two-way
        };

        constructor() {
            console.log("PersonDirective constructor")
        }
    }

    export class PersonDirectiveController {
        company:string;
        person:home.IPerson;

        constructor() {
            console.log("PersonDirectiveController constructor", this.person, this.company);
        }
    }
}
