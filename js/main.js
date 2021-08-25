// 1) Creo un Array vuoto
var numDispari = [];

// 2) creo un ciclo 
for ( i = 0; i < 6; i++){
    // chiedo all'utente un numero
    var userNumber = prompt('Inserisci un numero');

    //Se è dispari viene inserito nell'array
    if (userNumber % 2 !== 0){
        numDispari.push(userNumber);
    }
}

// 3) Mostro in console l'array
console.log(numDispari);