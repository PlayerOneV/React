// Desestructuración de arreglos/array

const personajes = ['Kvothe', 'Perseus', 'Guts'];

const [, p2] = personajes;

console.log(p2);

const returnArray = () => {
    return ['ABC', 123];
}

const [letras, numero] = returnArray();
console.log(letras, numero);

// Tarea
// El primer valor del array se llamara nombre y el segunto SetNombre
const UseState = (valor) => {
    return [valor, () => { console.log('Hello world') }];
}

/* const arr = UseState('Drake');
console.log(arr);
arr[1](); */

const [nombre, setNombre] = UseState("Sam");
console.log(nombre);
setNombre();