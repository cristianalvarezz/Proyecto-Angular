(()=>{


    //la interface es una clase que no se puede definir solo reglas 
    //ponerme reglas para asegurar que mi objeto cumple la condicion 
    interface Xmen{
        nombre:string;
        edad:number;
        //opcional
        poder?:string;
    }

//por lo menos debe tenr nombre
    const enviarMision =(xmen:Xmen)=>{
        console.log(`Enviado a ${xmen.nombre} a la mision`)
    }
    const regresarMision =(xmen:Xmen)=>{
        console.log(`Enviado a ${xmen.nombre} a la mision`)
    }


    const wolverine:Xmen ={
        nombre:'locan',
        edad:60
    }

    enviarMision(wolverine);
})();