/**
 * Created by rrjollol on 02.06.2016.
 */

module guestbook.services {
    export interface IGuestbookService {
        getEntries(); //:ng.Promise<any>;
        saveEntry(); //:ng.Promise<any>;
    }

    class GuestbookService implements IGuestbookService{

        public static $inject = [
            '$scope' //Repository
        ];

        constructor(){

        }

        getEntries(){

        }

        saveEntry(){

        }

    }

    angular.module('guestbook').service('GuestbookService', GuestbookService);


}
