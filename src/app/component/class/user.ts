export class User {
    constructor(
        public id:bigint,
        public nom:string,
        public prenom:string,
        public date_naissance:string,
        public classe:string
    ){}

    getUserAttributeName(){
        let data=[];
        data[0]="id";
        data[1]="nom";
        data[2]="prenom";
        data[3]="date_naissance";
        data[4]="classe";
        return data;
    }
}
