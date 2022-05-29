//Funciones en JS

/* const saludar = function (nombre) {
    return `Hola, ${nombre}`;
} */

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

console.log(saludar2('Guts'));
console.log(saludar3('Kvothe'));

const getUser = () => {
    return {
        id: 'ABC123',
        username: 'PlayerOneV'
    }
}

const getUser2 = () => ({
    id: 'ABC123',
    username: 'PlayerOneV'
})


console.log(getUser());
console.log(getUser2());

//Tarea
//Transformar getUsuarioActivo a una función de flecha
//Regresar un objeto implícito
//Pruebas

/* function getUsuarioActivo(nombre) {
    return {
        id: 'ABC837',
        username: nombre
    }
}; */

const getUsuarioActivo = (nombre) => ({
    id: 'ABC837',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Eragon');
console.log(usuarioActivo);