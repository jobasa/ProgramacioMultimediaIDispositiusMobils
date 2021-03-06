//A partir d'un array de numeros, mostra la suma de tots ells
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let rdo = array1.reduce((acumulador, array1) => acumulador + array1);
console.log(rdo);

console.log("----------------------------------");
/*A partir d'un array d'strings i numeros, mostra un string que els continga tots*/
let array2 = ['a', 1, 'b', 2, 'c', 3];
let rdo2 = array2.reduce((acumulador, elemento) => acumulador + elemento);
console.log(rdo2);

console.log("----------------------------------");
// A partir d'un array de dies, em torne un OBJECTE amb tants atributs com dies i la posició de cada dia
// És a dir per a l'array ['dilluns', 'dimarts', 'dimecres'] 
// torne un objecte {dilluns:0, dimarts:1, dimecres:2}
let dies = ['dilluns', 'dimarts', 'dimecres'];
let rdo3 = dies.reduce((acumular, element, pos) => {
    acumular[element] = pos;
    return acumular;
}, {});
console.log(rdo3);
console.log("----------------------------------");

//A partir d'un array amb objectes Musics (nom i instrument que toca)
//Que torne un array amb els noms de tots els components
// [ 'Joan', 'Pep', 'Vicent Lloret', 'Ariadna', 'Guillem' ]
let musics = [
    { 'nom': 'Joan', 'instrument': 'vocal' },
    { 'nom': 'Pep', 'instrument': 'guitarra' },
    { 'nom': 'Vicent Lloret', 'instrument': 'guitarra' },
    { 'nom': 'Ariadna', 'instrument': 'bateria' },
    { 'nom': 'Guillem', 'instrument': 'baix' }
]

//Ara ho fem amb reduce
let nomMusics = musics.reduce((acumulandor2, unMusic) => acumulandor2.concat(unMusic.nom), []);
console.log(nomMusics);


console.log("----------------------------------");
//Ara feu-ho utilitzant map()
let rdo4 = musics.map((elementMusico) => { return elementMusico.nom });
console.log(rdo4);

console.log("----------------------------------");
//Ara que torne un array només amb els noms del musics que toquen la guitarra
//['Pep', 'Vicent Lloret']
let rdo5 = musics.filter((instrumento) => {
    if (instrumento.instrument === 'guitarra') {
        return instrumento.nom
    }
});
console.log(rdo5);

console.log("----------------------------------");
//Amb reduce
//['Pep', 'Vicent Lloret']

console.log("----------------------------------");
//----------------------------------------------------------------------------------

const users = [
    {
        id: 1,
        name: "Jonathon Haley",
        username: "Monte.Weber2",
        email: "Daphne43@yahoo.com",
        phone: "1-563-675-1857 x11708",
        website: "carmela.net",
        password: "hashed_password"
    },
    {
        id: 2,
        name: "Dean John",
        username: "dd.1",
        email: "deno@google.com",
        phone: "1-123-543-1857 123212",
        website: "dd.net",
        password: "Dean_hashed_password"
    }]

    console.log("----------------------------------");
//Que torne un array d'objectes amb l'email, el tel i la web
[
    {
        email: 'Daphne43@yahoo.com',
        website: 'carmela.net',
        phone: '1-563-675-1857 x11708'
    },
    {
        email: 'deno@google.com',
        website: 'dd.net',
        phone: '1-123-543-1857 123212'
    }
]

console.log("----------------------------------");
//-----------------------------------------------------
//A partir d'un arrar de comandes com el proporcionat
let comandes = [
    {
        client: {
            nom: "Manel Viel"
        },
        productes: [
            {
                id: 1,
                nom: "Taronges"
            }, {
                id: 2,
                nom: "Pomes"
            }
        ]
    }, {
        client: {
            nom: "Joan Mi"
        },
        productes: [
            {
                id: 3,
                nom: "Peres"
            }, {
                id: 2,
                nom: "Pomes"
            }
        ]
    }, {
        client: {
            nom: "Tomas Marin"
        },
        productes: [
            {
                id: 4,
                nom: "Freses"
            }, {
                id: 2,
                nom: "Peres"
            }, {
                id: 1,
                nom: "Platans"
            }
        ]
    }
]


// tornar un array anomenat llistat de comandes, on cada element siga un array d'objectes on 
// aparega només el client i el producte de la seua comanda.
// Exemple:

//llistatDeComandes => [
//    [
//        { client: 'Manel Viel', productes: 'Taronges' },
//        { client: 'Manel Viel', productes: 'Pomes' }
//    ],
//    [
//        { client: 'Joan Mi', productes: 'Peres' },
//         { client: 'Joan Mi', productes: 'Pomes' }
//     ],
//     [
//         { client: 'Tomas Marin', productes: 'Freses' },
//         { client: 'Tomas Marin', productes: 'Peres' },
//         { client: 'Tomas Marin', productes: 'Platans' }
//     ]
// ]
let pedidos=comandes.map((element1)=>{
    //Agafar el nom del producte y del client de cada array
    let nom= element1.client;
    let producte=element1.productes;
    
    //Maniupule array producte
    producte.map(({nom})=>{
        let nomProd=nom;
        return ({'client':nom, 'productes': nomProd});
    });


});
 console.log(pedidos);
 
console.log("----------------------------------");
