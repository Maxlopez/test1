const fs = require('fs');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if( !Number(base)){
            reject(`La base ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i} \n`);
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            }
            resolve(`tabla-${base}.txt`);
        });
    });
}

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
       fs.readFile(`tablas/tabla-${base}.txt`, 'utf8', (err, data) => {
           if( err){
               reject(`No existe archivo tabla-${base}.txt`);
           }
           resolve(data);
       });
    });
}

module.exports = {
    crearArchivo: crearArchivo,
    listarTabla: listarTabla
}