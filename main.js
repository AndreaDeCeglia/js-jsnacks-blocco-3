//*Snack1*
//Crea un array vuoto e 
//chiedi all’utente un numero da inserire 
//nell’array.
//Continua a chiedere i numeri all’utente 
//e a inserirli nell’array fino a quando 
//la somma degli elementi è minore di 50.

// let array = [];
// console.log(array);

// let sum = 0;

// while( sum < 50 ){
//     let number = parseInt( prompt('write a number'));
//     console.log(number);
//     sum += number;
//     console.log(sum);
//     array.push(number);
// }

// console.log(array);

//*************************************** */


//*Snack2*
//Il software deve chiedere per 5 volte 
//all’utente di inserire un numero.
//Il programma stampa la somma di 
//tutti i numeri inseriti.

let i = 0;

let sum = 0;

console.log(sum);

while( i < 5 ){
    
    let number = parseInt( prompt('write a number'));
    console.log(number);

    sum += number;
    console.log(sum);

    i++
}

console.log(`the sum is `, sum);