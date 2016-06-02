/**
 * Created by rrjollol on 02.06.2016.
 */

module guestbook.repository {
    export interface IGuestbookRepository {
        getEntries():ng.IPromise<any>; //:ng.Promise<any>;
        saveEntry(); //:ng.Promise<any>;
    }


    export class GuestbookRepository implements IGuestbookRepository {

        handlerUrl:string;

        public static $inject = [
            '$scope', '$http' //Repository
        ];

        constructor(private scope:ng.IScope,
                    private httpService:ng.IHttpService) {
            this.handlerUrl = "http://localhost:8081"; //todo uri anpassen
        }

        getEntries():ng.IPromise< any > {
            var result:ng.IPromise< any> = this.httpService.get(this.handlerUrl)
                .then((respond:any) => {
                    console.log("getEntries response succes!!", respond);
                    return respond.data;
                }, (error:any) => {
                    console.log("error: ", error);
                });
            return result;
        }

        saveEntry() {

        }
    }
    angular.module('guestbook').service('GuestbookRepository', GuestbookRepository);
}
