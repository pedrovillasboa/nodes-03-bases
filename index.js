
const argv = require('yargs')
       
            .option('b', {
                alias:'base',
                type:'number',
                demandOption: true,
                describe: ' es la base de la tabla de multiplicar'
            })


            .option('l', {
                alias:'limite',
                type:'number',
                demandOption: false,
                default:10,
                describe: ' es el  limite de multiplicador'
            })

            .option('v', {
                alias:'visualizar',
                type:'booleano',
                demandOption: false,
                default:false,
                describe: ' muestra la tabla en pantalla'
            })

             .check((argv , option) =>{
                 if(isNaN(argv.b)){
                     throw new Error('La base tiene que ser un numero')
                 }
                 return true
             })
             

            .help() 
            .version() 

        .argv;


const  {multiplicar} = require("./multiplicador");


multiplicar(argv.b,argv.l, argv.v);

