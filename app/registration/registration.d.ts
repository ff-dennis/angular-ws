/**
 * Created by rrjollol on 02.06.2016.
 */

declare module registration {
    export interface IRegistrationScope extends ng.IScope {
        surename: string;
        name: string;
        message: string;
        email: string;
        gender: string;
        vm: RegistrationCtrl;
    }
}
