// Importación y algunas funciones para arrays

// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes';
import heroes, { owners } from "../data/heroes";

/* const getHeroeById = (id) => {
    return heroes.find((hero) => {
        if (hero.id === id) {
            return true;
        } else {
            return false;
        }
    });
} */

export const getHeroeById = (id) => heroes.find((hero) => hero.id === id);
//console.log(getHeroeById(2));

export const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);
//console.log(getHeroesByOwner('DC'));

//console.log(owners);