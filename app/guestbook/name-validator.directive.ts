/// <reference path='../_all.ts' />

module guestbook {
    'use strict';

    /**
     * The directive to display a guestbook entry:
     */
    export class NameValidatorDirective implements ng.IDirective {

        require = "ngModel";
        scope = {
            value: '=ngModel'
        };

        link = (scope:any,
                instanceElement:any,
                instanceAttributes:any,
                ctrl:ng.INgModelController,
                transclude:ng.ITranscludeFunction):void => {

            // Add validator to validators pipeline
            ctrl.$validators['nameCheck'] = (modelValue:string, viewValue:string) => {
                return modelValue && modelValue.toLowerCase()  !== "dennis";
            }
        };

        //scope und $http backend init
        constructor() {
            console.log("constructor NameValidatorDirective");
        }
    }

}
