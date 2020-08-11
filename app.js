const argv = require('./config/yargs').argv;
const porHacer = require('./logica/por-hacer');
const colors = require('colors');
const { actualizar } = require('./logica/por-hacer');

let comando = argv._[0];


switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
        
    case 'listar':
        let listado = porHacer.getListado();

        console.log('________________________________'.green);
        console.log('           POR HACER           '.green);
        console.log('________________________________'.green);

        for (let tarea of listado) {

            console.log('')
            console.log('Tarea: '.blue, tarea.descripcion);
            console.log('Estado: '.blue, tarea.completado);
            console.log('')

        }
        console.log('________________________________'.green);
        console.log('')
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('Comando no es reconocido');
}