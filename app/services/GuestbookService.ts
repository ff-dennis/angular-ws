/**
 * Created by rrjollol on 02.06.2016.
 */

module guestbook.services {
    import IGuestbookRepository = guestbook.repository.IGuestbookRepository;
    export interface IGuestbookService {
        getEntries(); //:ng.Promise<any>;
    }

   export class GuestbookService implements IGuestbookService{

        public static $inject = [
            '$scope',
             'GuestbookRepository'
        ];

        constructor(private scope:ng.IScope,
                    private repository: IGuestbookRepository){
        }

        getEntries(){
            return this.repository.getEntries();
        }
    }

    angular.module('guestbook').service('GuestbookService', GuestbookService);

}
