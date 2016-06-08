declare module home {
    export interface IHomeScope extends ng.IScope {
        myVariable: string;
        vm: HomeCtrl;
    }

    export interface IPerson {
        firstname:string;
        lastname:string;
    }
}
