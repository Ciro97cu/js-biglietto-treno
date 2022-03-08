// // introductive alert
// alert(`Welcome on board!!! 
// Rispondi alle domande per conoscere 
// il prezzo del tuo biglietto`);
// // constant age passenger
// const age = prompt("Quanti anni hai?", "Es. 25");
// // constant kilometers to do
// const kmToDo = prompt("Quanti kilometri vuoi percorrere?", "Es. 10");

// // age and km in the html
// document.getElementById("your_age").innerText = `${age} anni`;
// document.getElementById("your_km").innerText = `${kmToDo} Km`;

// // ticket price depending on the kilometers
// let priceTicket = (kmToDo * 0.21).toFixed(2);
// // price discount per age
// let priceOver65 = (priceTicket - (priceTicket * 0.40)).toFixed(2);
// let priceUnder18 = (priceTicket - (priceTicket * 0.20)).toFixed(2);

// /*check if age and kmToDo is in the 
// correct format using if*/
// if (isNaN(age)) {
//     console.log("Per favore inserisci la tua età in soli numeri");
//     document.getElementById("customer_price").innerText = "Per favore inserisci la tua età in soli numeri";
// } else if (isNaN(kmToDo)) {
//     console.log("Per favore inserisci il kilometraggio in soli numeri")
//     document.getElementById("customer_price").innerText = "Per favore inserisci il kilometraggio in soli numeri";
// } else if (age == 0 || kmToDo == 0) {
//     console.log("Hai dimenticato di compilare un campo o inserito 0");
//     document.getElementById("customer_price").innerText = "Hai dimenticato di compilare un campo o inserito 0"
// } else {
//     /*once checked the format, print the price
//     in the console and in the html*/
//     if (age < 18) {
//         console.log(`20% di sconto minorenni, il prezzo del tuo biglietto è di ${priceUnder18}€`)
//         document.getElementById("customer_price").innerText = `20% di sconto minorenni, il prezzo del tuo biglietto è di ${priceUnder18}€`;
//     } else if (age > 65) {
//         console.log(`40% di sconto over 65, il prezzo del tuo biglietto è di ${priceOver65}€`)
//         document.getElementById("customer_price").innerText = `40% di sconto over 65, il prezzo del tuo biglietto è di ${priceOver65}€`;
//     } else {
//         console.log(`Il prezzo del tuo biglietto è di: ${priceTicket}€`)
//         document.getElementById("customer_price").innerText = `Il prezzo del tuo biglietto è di: ${priceTicket}€`;
//     }
// }

document.querySelector("button").addEventListener("click", function () {
    const age = document.querySelector(".age-c input");
    const kmToDo = document.querySelector(".km input");
    const ageCustomer = parseInt(age.value);
    const kmCustomer = parseInt(kmToDo.value);
    const priceTicket = kmCustomer * 0.21;
    const priceOver65 = priceTicket - (priceTicket * 0.40);
    const priceUnder18 = priceTicket - (priceTicket * 0.20);

    if (isNaN(ageCustomer) || isNaN(kmCustomer)) {
        document.getElementById("customer_price").innerText = "Per favore compila i campi correttamente";
    } else if (ageCustomer <= 0 || kmCustomer <= 0) {
        document.getElementById("customer_price").innerText = "Per favore compila i campi correttamente";
    } else {
        if (ageCustomer < 18) {
            document.getElementById("customer_price").innerText = `Il tuo prezzo è: ${(priceUnder18).toFixed(2)}€`;
        } else if (ageCustomer > 65) {
            document.getElementById("customer_price").innerText = `Il tuo prezzo è: ${(priceOver65).toFixed(2)}€`;
        } else {
            document.getElementById("customer_price").innerText = `Il tuo prezzo è: ${(priceTicket).toFixed(2)}€`;
        }
    }
})