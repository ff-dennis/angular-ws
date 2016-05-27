/// <reference path='../_all.ts' />
module home {
    'use strict';
    /**
     * The main controller for the app. The controller:
     */
    export class HomeCtrl {
        myVariable:string;

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
            private $scope: IHomeScope
        ) {
            console.log("constructor HomeCtrl");

            this.myVariable = 'Set by controllers constructor';

            //$scope.vm = this;
            // 'vm' stands for 'view model'. We're adding a reference to the controller to the scope
            // for its methods to be accessible from view / HTML

        }

    }
}
