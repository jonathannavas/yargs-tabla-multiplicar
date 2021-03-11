const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');


console.clear();

crearArchivo( argv.b , argv.l, argv.h)
    .then( respuesta => console.log(respuesta.cyan))
    .catch( err => console.log(err));
