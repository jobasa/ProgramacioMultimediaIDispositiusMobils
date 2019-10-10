//Executeu este codi i mireu el que mostra per consola

let dies = ["Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte", "Diumenge"];
function paraCada(array, accio) {
    for (let i = 0; i < array.length; i++) {
        accio(array[i]);
    }
}
paraCada(dies, console.log);

//Modifiqueu-lo per a que faça el mateix utilitzant una funció fletxa (=>)
console.log("----------------------------------");
const perACada = (array, accio) => {
    for (let i = 0; i < array.length; i++) {
        accio(array[i]);
    }
}
perACada(dies, console.log);

//Modifiqueu el codi per a que faça el mateix utilitzant el mètode forEach()
console.log("----------------------------------");
dies.forEach((unDia) => {
    console.log(unDia);

});

// Que cree un altre array on calcule el numero de caracters de cada dia de la setmana
// ex: numCar=[7,7,8,6,9,8,8] 
// i després que mostre el contingut dels dos arrays de la següent manera:
// Dilluns: 7
// Dimarts: 7
// Dimecres: 8
// ...

console.log("----------------------------------");

let rdo = dies.map(unDia => { return unDia.length });
console.log(rdo);
dies.forEach((unDia, pos) => { console.log(unDia + ":" + rdo[pos]) });


//Mostra els dies que ténen més de 7 caracters (filter)
console.log("----------------------------------");
const TeMesDe = (unDia, numCaracMax) => {
    return unDia.length > numCaracMax;
}
let over7 = dies.filter((unDia) => TeMesDe(unDia, 7));
console.log(over7);

console.log("----------------------------------");
/* Ara volem fer el mateix, però que ens torne un String amb els dies que ténen més de 7 caracters */
/* reduce */
const TeMesDe = (unDia, numCaracMax) => {
    return unDia.length > numCaracMax;
}
let mayor7= dies.reduce(TeMesDe(unDia, 8));
console.log(mayor7);


