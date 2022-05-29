//Desestructuración de objetos ó asignación desestructurante
const persona = {
    nombre: 'Kvote',
    edad: 19,
    clave: 'Arcanista'
};

// const { nombre, edad, clave } = persona;
//const { nombre: nombre2 } = persona; -> primero el valor y después el nombre de la constante

/* console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave); */

/* 
console.log(nombre);
console.log(edad);
console.log(clave);
*/

function UseContext({ nombre, edad, clave, rango = "Elir" }) {
    // console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        age: edad,
        nomination: {
            first: "wind",
            second: "fire"
        }
    };
}

const mc = UseContext(persona);
const { nombreClave, age, nomination: { first, second } } = mc;

console.log(nombreClave, age);
console.log(first, second);