declare module guestbook {
    export interface IEntry extends ng.IScope {
        content:string;
        userName:string;
    }
}
