const colors = require('colors');
const fs = require('fs');
const {logica} = require('./logica');

const multiplicar = (base, limite,visualizar) => {
   
      const  resultado = logica(base , limite);
    if(visualizar){
        console.log(`*********tabla del ${base}
    ******* `);
 console.log(resultado);

    }
 
    
     const  nombreArchivo = ` tabla-del- ${base} .txt`

    fs.writeFile(`tablas/ ${nombreArchivo}`,resultado, (error) =>{
        if(error) throw error;
        console.log(`el archivo ${nombreArchivo} fue creado!`.rainbow);
    });
    
    


}
module.exports = {
    multiplicar
}