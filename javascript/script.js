// introductive alert
alert(`Welcome on board!!! 
Rispondi alle domande per conoscere 
il prezzo del tuo biglietto`);
// constant age passenger
const age = prompt("Quanti anni hai?", "Es. 25");
// constant kilometers to do
const kmToDo = prompt("Quanti kilometri vuoi percorrere?", "Es. 10");
// ticket price depending on the kilometers
let priceTicket = kmToDo * 0.21;

/*check if age and kmToDo is in the 
correct format using if*/
if (isNaN(age)) {
    console.log("Per favore inserisci la tua età in soli numeri");
    document.getElementById("customer_price").innerText = "Per favore inserisci la tua età in soli numeri";
} else if (isNaN(kmToDo)) {
    console.log("Per favore inserisci il kilometraggio in soli numeri")
    document.getElementById("customer_price").innerText = "Per favore inserisci il kilometraggio in soli numeri";
} else if (age == 0 || kmToDo == 0) {
    console.log("Hai dimenticato di compilare un campo o inserito 0");
    document.getElementById("customer_price").innerText = "Hai dimenticato di compilare un campo o inserito 0"
} else {
    /*once checked the format, we can calculate
    the eventual discount and than print the price
    in the console and in the html*/
    if (age < 18) {
        priceTicket -= priceTicket * 0.20;
        priceTicket = priceTicket.toFixed(2);
        console.log(`Sei minorenne hai diritto ad un
    20% di sconto, perciò il prezzo finale del tuo biglietto sarà di
    ${priceTicket}€`)
        document.getElementById("customer_price").innerText = `Sei minorenne hai diritto ad un 20% di sconto, perciò il prezzo finale del tuo biglietto sarà di ${priceTicket}€`;
    } else if (age > 65) {
        priceTicket -= priceTicket * 0.40;
        priceTicket = priceTicket.toFixed(2);
        console.log(`Sei over65 hai diritto ad un
    40% di sconto, perciò il prezzo finale del tuo biglietto sarà di
    ${priceTicket}€`)
        document.getElementById("customer_price").innerText = `Sei over65 hai diritto ad un 40% di sconto, perciò il prezzo finale del tuo biglietto sarà di ${priceTicket}€`;
    } else {
        priceTicket = priceTicket.toFixed(2);
        console.log(`Il prezzo del tuo biglietto
    è di: ${priceTicket}€`)
        document.getElementById("customer_price").innerText = `Il prezzo del tuo biglietto è di: ${priceTicket}€`;
    }
}