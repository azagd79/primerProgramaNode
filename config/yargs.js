
        const argv = require('yargs')
        .option('d',{
              alias: 'datos',
              type: 'number',
              demandOption: true,
              describe : 'mostrar la tabla de multiplicar'
        })
        .option('l',{
              alias: 'listado',
              type: 'boolean',             
              default: false,
              describe: 'permiso sobre mostrar la tabla'
        })
        .option('q',{
            alias: 'limite',
            type: 'number',
            demandOption: true
        })
        .check((argv,option)=>{
           if(isNaN(argv.d)){
               throw  'no es un numero';  
           }
              
           return true;
        })
       
       
       .argv


  
       module.exports = {
              argv1: argv.d,
              argv2: argv.l,
              argv3: argv.q  
       }