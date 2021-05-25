"use strict";
(() => {
    console.log('Inicio');
    //resolve todo bien reject todo mal
    const prom1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('se termino el timeout');
        }, 1000);
    });
    //then cuando todo se ejecuta perfecto 
    prom1
        .then(mensaje => console.log(mensaje))
        .catch(err => console.warn(err));
    console.log('fin');
})();
