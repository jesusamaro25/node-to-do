const descripcion = {
    demand: true, //obligatorio
    alias: 'd',
    desc: 'descripcion de la tarea por hacer'
}
const completado = {
    demand: true, //obligatorio
    alias: 'c',
    desc: 'marca como completado o pendiente la tarea',
    default: true //valor por defecto
}


const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion

    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado

    })
    .command('borrar', 'Borra un elemento de la lista', {
        descripcion
    })

.help()
    .argv
    //comando, descripcion, el objeto
module.exports = {
    argv
}