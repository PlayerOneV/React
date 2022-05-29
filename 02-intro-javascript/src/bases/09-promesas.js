import { getHeroeById, getHeroesByOwner } from "./bases/08-imports";

// Promesas
/* const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const hero = getHeroeById(2);
        resolve(hero);
        // reject('No se pudo encontrar al héroe');
    }, 2000);
});

promesa.then((hero) => {
    // console.log('then de la promesa');
    console.log('héroe', hero);
}).catch(err => console.warn(err)); */

const getHeroeByIdAsync = (id) => {
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroeById(id);
            if (hero) {
                resolve(hero);
            } else {
                reject('No se pudo encontrar al héroe');
            }
        }, 2000);
    });
    return promesa;
}

getHeroeByIdAsync(3)
    .then(console.log)
    .catch(console.warn)