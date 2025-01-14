// esercizio di oggi: Biglietto del treno

/****** RICHIESTA ******
Descrizione:
Scrivere un programma che chieda all’utente: - Il numero di chilometri da percorrere - Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

************************/

// salviamo i dati di Input
const nameField = document.getElementById ('name-field');
const kilometersField = document.getElementById ('kilometers-field');
const ageField = document.getElementById ('age-field')
const capField = document.getElementById ('cap-field')
const form = document.getElementById ('ticket-form');

// salviamo i dati di output
const name = document.getElementById ('passenger-name');
const offer = document.getElementById ('offer');
const carriage = document.getElementById ('carriage')
const cpCode = document.getElementById ('cp-code')
const ticketPrice = document.getElementById ('ticket-price');

// // tramite l'invio del form prendiamo i valori dei campi selezionati e li scriviamo nei blocchi
form.addEventListener('submit', (event) => {
    // blocco l'invio dei form
    event.preventDefault();

    //salvo i valori di input e gli levo eventuali spazi con trim
    const nameValue = nameField.value.trim();                           //Nome e cognome
    const kilometersValue = parseFloat(kilometersField.value.trim());   //kilometri
    const ageValue = ageField.value.trim();                             //età
    const messageValue = offerMessage (ageValue);                       //messaggio
    const carriageValue = randomNumber(8,1);                            //numero carrozza
    const cpCodeValue = capField.value.trim();                          //CAP
    const priceValue = calcTicketPrice (kilometersValue, ageValue);     //calcolo del prezzo


    // mostro il risultato
    // const risultato = `Name: ${nameValue}, Kilometers: ${kilometersValue}, Fascia di età: ${ageValue}, Prezzo del biglietto ${price}`;
    // console.log(risultato);

    // collego gli input agli output
    name.innerHTML = nameValue;
    offer.innerHTML = messageValue;
    carriage.innerHTML = carriageValue;
    cpCode.innerHTML = cpCodeValue;
    ticketPrice.innerHTML = priceValue;

})





// Function

// funzione per calcolare il prezzo della tratta
function calcTicketPrice(chilometri, eta){

    // moltiplico i chilometri inseriti dall'utente con il prezzo al km e salvo la variabile
    let prezzotratta = chilometri * 0.21;

    // se il passeggero è minorenne applicare uno sconto del 20%
    if (eta === 'minorenne') {

        // sconto del 20%
        prezzotratta = prezzotratta * 0.80 
    
    // altrimenti se il passeggero è over 65 applicare uno sconto del 40%   
    } else if (eta === 'over65') {
    
        // sconto del 40%
        prezzotratta = prezzotratta * 0.60
    }


    return `${prezzotratta.toFixed(2)} €`;

}


// funzione per calcolare il messaggio dell'offerta
function offerMessage(eta){

    let messaggio = 'Biglietto standard'
    // se il passeggero è minorenne applicare uno sconto del 20%
    if (eta === 'minorenne') {

        // sconto del 20%
        messaggio = 'Biglietto scontato del 20%'
    
    // se il passeggero è over 65 applicare uno sconto del 40%   
    } else if (eta === 'over65') {
    
        // sconto del 40%
        messaggio = 'Biglietto scontato del 40%'
    }

    return messaggio;

}

// funzione per calcolare numeri casuali
function randomNumber(max,min){
    const numeroGenerato = Math.floor(Math.random() * (max - min + 1) + min);

    return numeroGenerato;

}