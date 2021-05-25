"use strict";
(() => {
    const avenger = {
        nombre: 'Steve',
        clave: 'capitan america',
        poder: 'Droga'
    };
    const extraer = ({ nombre, clave }) => {
        //  const {nombre,clave}=avenger;
        console.log(nombre);
        console.log(clave);
        console.log(avenger.poder);
    };
    extraer(avenger);
    const avengers = ['thor', 'iroman', 'spiderman'];
    const [loki, hombre, arana] = avengers;
    // console.log(loki);
    // console.log(hombre);
    // console.log(arana);
    const extraerArr = ([thor, iroman, spiderman]) => {
        console.log(thor);
        console.log(iroman);
        console.log(spiderman);
    };
})();
