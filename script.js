var listaCognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
console.log(listaCognomi);

//chiedi all'utente il cognome
//blocco l'utente finchè non inserisce un carattere valido
var cognomeUtente;
var cognomeValido = false;
do {
    cognomeUtente = prompt("Inserisci il tuo cognome");

    if (cognomeUtente.trim() === "") {
        alert("Sembra che tu non abbia inserito alcun carattere...")
    } else {
        cognomeValido = true;
    }
} while (!cognomeValido);


//inseriscilo in au array con altri cognomi
listaCognomi.push(cognomeUtente);

//stampa la lista ordinata alfabeticamente
//var listaOrdinata = listaCognomi.sort();
//console.log(listaOrdinata);

//rendo il sort case insensitive (lo so che non l'abbiamo fatto ma era troppo bello)
listaCognomi.sort(function(a,b) {
    var x = a.toLocaleLowerCase();
    var y = b.toLocaleLowerCase();

    if (x<y) {
        return -1;
    }
    if (y<x) {
        return 1;
    }
    return 0
})

console.log(listaCognomi)

//scrivi anche la posizione della lista in cui il nuovo utente si trova
var posizioneCognomeUtente = (listaCognomi.indexOf(cognomeUtente)) + 1;

//lista ordinata visibile in html
var containerListaCognomi = document.getElementById("cognomi-ordinati");
for (var i = 0; i < listaCognomi.length; i++) {
    containerListaCognomi.innerHTML += "<li>" + listaCognomi[i] + "</li>";
}

var risultato = "Benvenuto signor/signora " + cognomeUtente + ", lei si trova alla posizione numero " + (posizioneCognomeUtente) + " della lista dei più attraenti di Bonavigo!"

//condizioni dell'input
// if (cognomeUtente.trim() === "") {
//     alert("Sembra che tu non abbia inserito alcun carattere...");
// } else {
//     console.log(risultato);
// }


//risultato visibile in html
benvenuto.innerHTML = risultato;


