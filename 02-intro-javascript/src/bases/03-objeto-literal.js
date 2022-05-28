const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direction: {
        ciudad: 'New York',
        zip: 443313,
        lat: 14.3323,
        lng: 32.9472,
    }
};

/* console.log({ persona });
console.table(persona);
console.table({ persona }); */

//const persona2 = persona; -> No estamos copiando el valor si no la referencia, por lo tanto si se modifica afecta al original
const persona2 = { ...persona }; //De esta forma podemos hacer una copia/clon que sea independiente del original
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);