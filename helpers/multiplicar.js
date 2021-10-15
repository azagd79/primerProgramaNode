const fs = require('fs');
const colors  =  require('colors');









const crearArchivo = (num,boleano,limit)=>{
  return  new Promise((res,rej)=>{
             

                let resultado = '';
     
                    //   console.log(`================== tabla del : ${num}  ==================`)
                    for(let i = 1; i <= limit;i++){
                    
                       resultado +=  `${num} ${colors.red('x')} ${i} = ${num * i}\n`;
                    }
                          
                    
                    console.log(resultado);
                if(boleano){
                    fs.writeFileSync(`./salida/tabla-${num}.txt`,resultado)
                    res(colors.green(`tabla-${num}.txt creado con exito`)); 
                                          
                }else{
                    console.log('no se puede completar la tarea');
                }
                   
                    //     console.log(resultado);
                    
                       
                     
                    
             
    })
}

module.exports = {
    crearArchivo
}




 
 




// const crearArchivo = (num)=>{
          
//    let resultado = '';
     
//       console.log(`================== tabla del : ${num}  ==================`)
//     for(let i = 1; i <= 10;i++){
    
//        resultado +=  `${num} x ${i} = ${num * i}\n`;
//     }
//       console.log(resultado);
    
//    fs.writeFileSync(`tabla-${num}.txt`,resultado)

      
// }





// module.exports = {
//     funcion: crearArchivo
// }

