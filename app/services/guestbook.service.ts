/// <reference path='../_all.ts' />

module services {
    export interface IGuestbookService {
        getEntries():ng.IPromise<guestbook.IGuestbookEntry[]>; //:ng.Promise<any>;
        saveEntry(entry:guestbook.IGuestbookEntry):ng.IPromise<any>;
    }

    export class GuestbookService implements IGuestbookService {
        private handlerUrl:string;

        public static $inject = ['$http'];
        constructor(private httpService:ng.IHttpService) {
            this.handlerUrl = "http://192.168.0.117:8081/api/v1/guestbook/messages"; //todo uri anpassen
        }

        getEntries():ng.IPromise<guestbook.IGuestbookEntry[]> {
            var result:ng.IPromise< any> = this.httpService.get(this.handlerUrl)
                .then((respond:any) => {
                    console.log("getEntries response succes!!", respond);
                    return respond.data;
                }, (error:any) => {
                    console.log("error: ", error);
                });
            return result;
        }

        saveEntry(entry:guestbook.IGuestbookEntry) {
            return this.httpService.post(this.handlerUrl,entry);
        }
    }
}
