
const opts_crear = {
    descripcion:{
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    }

} 

const opts_borrar = {
    descripcion:{
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por borrar'
    }

} 

const opts_actualizar = {
    descripcion:{
        demand: true,
        alias: 'd',
        desc: 'Nombre de la tarea para actualizar'
    },
    completado:{
        alias: 'c',
        demand: true,
        default: true,
        desc: 'Bandera para cambiar la tarea a completada'
    }

}

const argv = require('yargs')
.command('crear','Crea una tarea por hacer', opts_crear)
.command('actualizar','Actualiza el estado de una tarea', opts_actualizar)
.command('borrar', 'Elimina una tarea de la lista',opts_borrar)
.help()
.argv;

module.exports ={
    argv
}


