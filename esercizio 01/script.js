/* Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore. */ 

const bici = [
    {nome: "Qui",
     peso: 12,
    },

    {nome: "Quo",
     peso: 15,
    },

    {nome: "Qua",
     peso: 10,
    }
];
console.log(bici);

 
//dichiaro il peso minore da stampare
let pesoMinore = bici[0].peso;
//ciclo l'array
for(let i=0; i<bici.length; i++) {
    //dichiaro l'oggetto dell'array
    const oggetto = bici[i];
    //stampo la proprità peso dell'oggetto
    console.log(oggetto.peso);
    //confronto il peso del primo oggetto col secondo e col terzo oggetto
    if(pesoMinore > bici[1].peso) {
        pesoMinore = bici[1].peso;
    } else if(pesoMinore > bici[2].peso)
        pesoMinore = bici[2].peso;
}
 console.log("il peso minore è", pesoMinore);
