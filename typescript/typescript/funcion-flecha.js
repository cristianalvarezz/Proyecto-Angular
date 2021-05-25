"use strict";
(function () {
    const miFuncion = function (a) {
        return a.toUpperCase;
    };
    //con la funcion flecha me ahorro el return y los corchetes
    const miFuncionF = (a) => a.toUpperCase;
    const sumarN = function (a, b) {
        return a + b;
    };
    const sumarF = (a, b) => a + b;
    var hulk = {
        nombre: "Hulk",
        smash: function () {
            setTimeout(() => {
                console.log(this.nombre + " smash");
            }, 1000);
        },
    };
})();
