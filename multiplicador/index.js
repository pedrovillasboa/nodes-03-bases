const fs = require('fs');
const {logica} = require('./logica');

const multiplicar = (base) => {
    console.log(`*********tabla del ${base}
    ******* `);

      const  resultado = logica(base);
    
     console.log(resultado);
    fs.writeFileSync(`tablas/tabla del ${base}`,resultado);
    
    


}
module.exports = {
    multiplicar
}