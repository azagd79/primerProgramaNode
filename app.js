
     const { crearArchivo } = require('./helpers/multiplicar');   
      const { argv1,argv2,argv3 } = require('./config/yargs');




        const informacion = async(num,boo,limit)=>{ 

            try {
               const resultado =  await crearArchivo(num,boo,limit);
               return resultado;
            } catch (error) {
                  throw error;
            }
       //  
             };
       


    
 informacion(argv1,argv2,argv3).then(res=>{
      console.log(res);
}).catch(err=>{
      console.log(err
       )
})























      // const argv = require('yargs').option('f',{
      //       alias: 'file',
      //       type: 'number',
      //       demandOption: true
      // })
      // .option('l',{
      //       alias: 'listado',
      //       type: 'boolean',
      //       demandOption:  true,
      //       default: false

      // })
      //    .check((argv,options)=>{
      //          if(isNaN(argv.f)){
      //              throw 'la base tiene que ser un  numero';
      //          }else{

      //             console.log(argv.f);
      //             console.log(argv.l)
      //                return true;
      //          }
      //    })
      // .argv;   




  
    


     






//       const informacion = async(num)=>{ 

//      try {
//         const resultado =  await crearArchivo(num);
//         return resultado;
//      } catch (error) {
//            throw error;
//      }
 
     
//      informacion(5).then(res=>{
//       console.log(res);
// }).catch(err=>{
//       console.log(err
//        )
// })

 
 




//  }
 
 


 
 
     

//  let progreso = process.argv




//  const [,,s3] = progreso;


//   const  [,seg] = s3.split('=')

//      console.log(seg)
// //    const [] = s3.split('=');








///npm run prueba












    //    funcion(6);

//   fs.writeFileSync(`multiplicacion-${numero}`,respuesta);


// fs.writeFile(`multiplicacion-${numero}`,respuesta,(err)=>{
//     if(err) throw err;


//     console.log('se creo tu tabla')
// });
       