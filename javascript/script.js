// constant kilometers to do
const kmToDo = prompt("Quanti kilometri vuoi percorrere?", "Es. 10");
// constant age passenger
const age = prompt("Quanti anni hai?", "Es. 25");
// ticket price depending on the kilometers
let priceTicket = kmToDo * 0.21;

if (isNaN(age)) {
    console.log("Per favore inserisci la tua età in soli numeri");
} else if (isNaN(kmToDo)) {
    console.log("Per favore inserisci il kilometraggio in soli numeri")
} else {

    if (age < 18) {
        priceTicket -= priceTicket * 0.20;
    } else if (age > 65) {
        priceTicket -= priceTicket * 0.40;
    }

    let priceTicketRounded = priceTicket.toFixed(2) + "€";

    if (age < 18) {
        console.log(`Sei minorenne hai diritto ad un
    20% di socnto, perciò il prezzo finale del tuo biglietto sarà di
    ${priceTicketRounded}`)
    } else if (age > 65) {
        console.log(`Sei over65 hai diritto ad un
    40% di socnto, perciò il prezzo finale del tuo biglietto sarà di
    ${priceTicketRounded}`)
    } else {
        console.log(`Il prezzo del tuo biglietto
    è di: ${priceTicketRounded}`)
    }
}

