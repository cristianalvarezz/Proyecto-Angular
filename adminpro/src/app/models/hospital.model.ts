interface _HospitalUser {
    _id: string;
    nombre: string;
    img: string;
}

//http://localhost:3005/api/medicos
export class Hospital {

    constructor(
        public nombre: string,
        public _id?: string,
        public img?: string,
        public usuario?: _HospitalUser,
    ) {}

}

