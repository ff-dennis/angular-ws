/**
 * Created by rrjollol on 02.06.2016.
 */
/**
 * Created by rrjollol on 02.06.2016.
 */
/// <reference path='../_all.ts' />
module about {
    /**
     * The controller of home feature:
     */
    export class AboutDetailCtrl {
       // person:IPerson;
        // $inject annotation.
        // It provides $injector with information about dependencies to be injected into constructor
        // it is better to have it close to the constructor, because the parameters must match in count and type.
        // See http://docs.angularjs.org/guide/di
        //public static $inject = [
        //    '$scope',
        //];
        // dependencies are injected via AngularJS $injector
        // controller's name is registered in Application.ts and specified from ng-controller attribute in index.html
        constructor() {

            console.log("constructor About Detail Scope");
        }


    }

}
