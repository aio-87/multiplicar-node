const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo } = require('./multiplicar/multiplicar')
const { listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite)
            .catch(err => console.log(err));
        break;

    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo.green }`))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido.');
        break;
}
//let argv = process.argv;
//let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];
/*
console.log(argv.base);
console.log('Limite', argv.limite);


*/