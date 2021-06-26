import { Producto } from "./producto";

export class CarritoCompra {
    nombre: string;
    nombreUsuario: string;
    email: string;
    producto : Producto[];

    constructor(nombre: string, nombreUsuario: string, email: string, producto:Producto[]) {
        this.nombre = nombre;
        this.nombreUsuario = nombreUsuario;
        this.email = email;
        this.producto=producto;
    }
}