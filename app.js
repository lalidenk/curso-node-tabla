
const {crearArchivo} = require('./helpers/multiplicar')
const argv= require('./config/yargs')
const colors= require('colors')

console.clear();


console.log(argv)

crearArchivo(argv.base, argv.list, argv.hasta).then(nombrearchivo=>
    console.log(nombrearchivo.rainbow,'creado'.cyan))
    .catch(err=> console.log(err));





