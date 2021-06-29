import { Producto } from "./producto";

export class CarritoCompra {
    id: string;
    nombre: string;
    nombreUsuario: string;
    email: string;
    producto : Producto[];

    
    constructor( id: string,nombre: string, nombreUsuario: string, email: string,producto?:Producto[]) {
        this.id=id;
        this.nombre = nombre;
        this.nombreUsuario = nombreUsuario;
        this.email = email;
        this.producto=producto|| [];

    }
}