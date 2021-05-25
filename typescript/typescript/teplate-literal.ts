(function(){
    function getEdad(){
        return 100+200;
    }
    
        const nombre = 'fernando'
        const apellido ='herrera'
        const edad =33 ;
    
        //const salida =nombre + " " + apellido + " ( "+ edad+" )";
        const salida = `${ nombre } 
        ${apellido} (${ edad }) ${getEdad()}`;
    })();
    