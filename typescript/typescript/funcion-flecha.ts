(function () {

    const miFuncion =function(a:string){
        return a.toUpperCase;
    }

    //con la funcion flecha me ahorro el return y los corchetes
    const miFuncionF =(a:string)=>a.toUpperCase;

    const sumarN = function(a:number,b:number){
        return a+b;
    }

    const sumarF = (a:number,b:number)=> a + b;

    var hulk = {
        nombre: "Hulk",
        smash: function () {
            setTimeout( () =>{
                console.log(this.nombre + " smash");
            }, 1000);
        },
    };


})();
