"use strict";
(() => {
    //por lo menos debe tenr nombre
    const enviarMision = (xmen) => {
        console.log(`Enviado a ${xmen.nombre} a la mision`);
    };
    const regresarMision = (xmen) => {
        console.log(`Enviado a ${xmen.nombre} a la mision`);
    };
    const wolverine = {
        nombre: 'locan',
        edad: 60
    };
    enviarMision(wolverine);
})();
