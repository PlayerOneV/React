const nombre = "Fernando";
const apellido = "Herrera";

//const fullName = nombre + ' ' + apellido;
const fullName = `${nombre} ${apellido}`;

console.log(fullName);

function getSaludo(nombre) {
    return 'Hello ' + nombre;
}

console.log(`Este es un texto: ${getSaludo(fullName)} `);