//Arreglos en JS
//const arreglo = new Array(); Es muy raro verlo de esta forma
const arreglo = [1, 2, 3, 4];
//arreglo.push(1); No es recomendable utilizar push por que modifica el objeto principal

let arreglo2 = [...arreglo, 5]; //El operador spread es usado para crear copias, lo que hace es extraer la información

//El metodo map regresa un nuevo arreglo. 
//El parametro de la función se utiliza para referirse a el valor de cada posición del arreglo original
const arreglo3 = arreglo2.map(function (numero) {
    return numero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);