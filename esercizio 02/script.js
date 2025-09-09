/*Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/ 

const squadre = [
    {nome: "Castrovillari",
     punti: 0, 
     falli: 0,
    },
    
    {nome: "Raffadali" ,
     punti: 0, 
     falli: 0,
    },

    {nome: "Buggerru",
     punti: 0, 
     falli: 0,
    },
];
console.log(squadre);

//genero una funzione di numeri casuali
function random() {
    return Math.floor(Math.random()*5);
}

//adesso creo un ciclo in cui assegnerò un numero casuale a punti e falli
for(let i=0; i<squadre.length; i++){
    let squadra = squadre[i];
     //assegno un numero random ai punti fatti
    squadra.punti = random();
    //assegno un numero random ai falli ricevuti
    squadra.falli = random();
}

//creo array che contengono solo i nomi e i falli subiti
const nomiFalliSubiti = [];
console.log(nomiFalliSubiti);

// creo un ciclo per inseire il nome e i falli subiti nel nuovo array
for(let i=0; i<squadre.length; i++){
    let squadra = squadre[i];
    let oggettoNuovo = {nome: squadra.nome, falli: squadra.falli};
    nomiFalliSubiti.push(oggettoNuovo);
}
