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

// let i = 0;

// let sum = 0;

// console.log(sum);

// while( i < 5 ){
    
//     let number = parseInt( prompt('write a number'));
//     console.log(number);

//     sum += number;
//     console.log(sum);

//     i++
// }

// console.log(`the sum is `, sum);

//***************************************************** */


//*Snack3* (Bonus)
//Fai inserire un numero, che chiameremo N, all’utente.
//Genera N array,
//ognuno formato da 10 numeri casuali da 1 a 100.
//Ogni volta che ne crei uno, stampalo.

let N = parseInt( prompt('write how many array you want to create'));
console.log(N);

let x = 0;

while( x < N ){
    
    let array = new Array();
    console.log(array);

    let i = 0;

    while( i<10 ){

        array.push(Math.round(Math.random() * 100 ));
        console.log(array);

        i++;
    }

    console.log(array);

    x++;

}