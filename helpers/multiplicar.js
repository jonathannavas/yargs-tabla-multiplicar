const fs = require('fs');
const colors = require('colors');

const crearArchivo  = async ( valor, listar, maximo ) => {
 
    try {

        let salida = '';

    
        for(let i = 1;i<=maximo;i++){
            salida += ` ${ valor }  ${'x'}  ${i} ${'='} ${ i * valor } \n`;
        }

        if(listar){
            console.log('===========================');
            console.log(` Tabla del ${valor}`);
            console.log('===========================');
            console.log(salida);
        }
       
    
        fs.writeFileSync(`./salida/tabla-${valor}.txt`, salida);
        return `Tabla-${valor}.txt`;

    } catch (error) {
        throw error;
    }

}

module.exports = {
    crearArchivo
}