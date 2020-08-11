const fs = require('fs');
const { rejects } = require('assert');
const colors = require('colors');


let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) {
            throw new Error('No se pudo grabar', err);
        }
    });
}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    }
    catch{
        listadoPorHacer = [];
    }

}


const getListado = () => {

    cargarDB();
    return listadoPorHacer;


}

const crear = (desc) => {

    cargarDB();

    let porHacer = {
        descripcion: desc,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return 'Registro actualizado';
    } else {
        return false;
    }
}

const borrar = (descripcion) => {

    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion;
    });

    if(listadoPorHacer.length === nuevoListado.length ){
        return(`La tarea ${descripcion} no ha sido eliminada`).red;

    }else{
       
        listadoPorHacer = nuevoListado;
        guardarDB();
        return(`La tarea ${descripcion} ha sido eliminada`).green;
    }

}

module.exports = {
    crear: crear,
    getListado: getListado,
    actualizar: actualizar,
    borrar:borrar
}