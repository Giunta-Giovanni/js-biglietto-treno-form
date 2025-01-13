// esercizio di oggi: Biglietto del treno

/****** RICHIESTA ******
Descrizione:
Scrivere un programma che chieda all’utente: - Il numero di chilometri da percorrere - Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

************************/

// salviamo i file di Input
const nameField = document.getElementById ('name');
const kilometersField = document.getElementById ('kilometers')
const form = document.getElementById ('ticket-form')

console.log(nameField, kilometersField, form);


























// Function

// funzione per calcolare il prezzo della tratta
function calcTicketPrice(chilometri, eta){

    // moltiplico i chilometri inseriti dall'utente con il prezzo al km e salvo la variabile
    let prezzotratta = chilometri * 0.21;

    // mostro il prezzo intero della tratta
    console.log("Il prezzo intero è di", prezzotratta.toFixed(2),"€");

    // se l'eta del passeggero è minore di 18 applicare uno sconto del 20%
    if (eta < 18) {

        // sconto del 20%
        prezzotratta = prezzotratta * 0.80 
    
    // altrimenti se l'eta del passeggero è maggiore di 65 applicare uno sconto del 40%   
    } else if (eta > 65) {
    
        // sconto del 40%
        prezzotratta = prezzotratta * 0.60
    }


return `${prezzotratta.toFixed(2)} ${'€'}`

}