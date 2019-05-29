//requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    console.log('==============================='.green);
    console.log(`======== TABLA DEL ${ base } =========`.green);
    console.log('==============================='.green);
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor de la base: ${ base }, no es un número`);
            return;
        } else if (!Number(limite)) {
            reject(`El valor del limite: ${ limite }, no es un número`);
            return;
        } else {
            let data = '';

            for (let i = 1; i <= limite; i++) {
                data += `${ base } * ${ i } = ${ base * i }\n`;
            }
            resolve(console.log(data));
        }
        //   if (err) reject(err);
        //    else resolve(console.log(data));
    });
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido: ${ base }, no es un número`);
            return;
        } else if (!Number(limite)) {
            reject(`El valor del limite: ${ limite }, no es un número`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${ base }.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}