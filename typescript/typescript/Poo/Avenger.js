"use strict";
(() => {
    class Avenger {
        // nombre:string;
        // equipo:string;
        // nombreReal:string;
        // puedePelear:boolean;
        // peleasGanadas:number;
        constructor(nombre, equipo, nombreReal, puedePelear, peleasGanadas = 0) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.puedePelear = puedePelear;
            this.peleasGanadas = peleasGanadas;
        }
    }
    const antman = new Avenger('Antman', 'capi');
})();
