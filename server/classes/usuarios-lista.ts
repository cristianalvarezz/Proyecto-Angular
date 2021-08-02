import { Usuario } from "./usuario";

export class UsuariosLista {
  private lista: Usuario[] = [];

  constructor() {}

  public agregar(usuario: Usuario) {
    this.lista.push(usuario);
    //aqui imprimo todos los usuarios que estna conectados 
    console.log(this.lista);
    return usuario;
  }


  public actualizarNombre( id: string, nombre: string ) {

    for( let usuario of this.lista ) {

        if ( usuario.id === id ) {
            usuario.nombre = nombre;
            break;
        }

    }


    console.log('===== Actualizando usuario ====');
    console.log( this.lista );

}

  //Obtener lista de usuarios
  public getLista() {
    //cuando un usuario no tienen nombre lo evito
    return this.lista.filter(usuario=>usuario.nombre!=='sin-nombre');
  }
  public getUsuario(id: any) {
      //obtengo el usuario pedido 
    return this.lista.find((usuario) => usuario.id === id);
  }

  //obtener usuarios en una sala en particular 

  public getUsuariosEnSala(sala:string){
      //si quiero el usuario de alguna sala en particular
      return this.lista.filter(usuario=>usuario.sala===sala);
  }

  //borrar usuario de la comunicacionde sockets
  public borrarUsuario(id:string){

    const tempUsuario=this.getUsuario(id);
    //me devolvera una nueva lista con todos los usuarios menos el usuario del id que estoy borrando 
    this.lista=this.lista.filter(usuario=> usuario.id !==id)
    // console.log(this.lista);
    return tempUsuario
  }
}
