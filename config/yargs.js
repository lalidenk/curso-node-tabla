const colors= require('colors')
const argv = require('yargs')
.option('b', {alias:'base',
              type:'number',
              demandOption:true,
              describe:'Base de ala tabla de multiplicar'.blue})
            
.option('l',{
              alias:'list',
              type:'boolean',
              default:false,
              describe:'permite listar la tbla de multiplicar'.blue})
.option('h',{
               alias:'hasta',
               type:'number',
               default:10,
               describe:'indica hasta que número se va a multiplicar'.blue})
.check((argv, options)=>{
                if (isNaN(argv.b))
                   {throw 'La base tiene que ser un número'.red}
                if (isNaN(argv.h))
                   {throw 'El valor hasta tiene que ser un número'.red}
                
                return true;
              })
.argv;

module.exports=argv;