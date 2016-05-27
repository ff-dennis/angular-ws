declare module home {
    export interface IHomeScope extends ng.IScope {
        myVariable: string;
        vm: HomeCtrl;
    }
}
