
const fs = require('fs');
const colors= require('colors')


const crearArchivo =async (base, list=false, hasta=10) =>{
 try{
   
    let salida, consola=''

    for ( let i=1; i<hasta+1; i++)
    {
        let resultado = base*i
        salida += `${base} x ${i} = ${resultado}\n`;
        consola+= colors.cyan(`${base} ${'x'.green} ${i}`) + colors.magenta(`=`) + colors.green(`${resultado}\n`);

    }

    if (list)
    {
        console.log("===============".green)
        console.log(`Tabla del `+colors.blue(`${base}`))
        console.log("===============".green)
        console.log(consola)
    }
  

    fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
    //console.log(`tabla-${base}.txt creada`)
    return `tabla-${base}.txt`

 }

 catch(err)
   {throw err}
 

}

module.exports = {
    crearArchivo
}


