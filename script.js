// js.snack - 1

// const num1 = parseInt(prompt('inserisci un numero'));
// const num2 = parseInt(prompt('inserisci un numero'));

// if (num1 > num2) {
//     console.log(num1);

// }else if (num1 == num2) {
//     console.log('i numeri sono uguali');

// }else {
//     console.log(num2);
// }

////////////////////////////////////////////////////////////////////////

// js.snack - 2

// const word1 = prompt('inserisci una parola');
// const word2 = prompt("inserisci un'altra parola");

// if (word1.length > word2.length) {
//     console.log(`la parola ${word1} è più grande`);

// }else if (word1.length == word2.length) {
//     console.log(`la parola ${word1} e la parola ${word2} sono lunghe uguali`);
        

// }else {
//     console.log(`la parola ${word2} è più lunga`);

// }


///////////////////////////////////////////////////////////////////////////


// js.snack - 3

// let arrNumUser = [];

// for (let i = 0; i < 10; i++) {

//     const numUser = parseInt(prompt('inserisci numero'));
//     arrNumUser.push(numUser);
    
    
// }

// let add = 0;

// for (let i = 0; i < arrNumUser.length; i++) {

//     add = add + arrNumUser[i];
// }

// console.log(add);


// metodo senza arrey

let add = 0;

for (let i = 0; i < 10; i++) {

    const numUser = parseInt(prompt('inserisci numero'));
    add = add + numUser;
    
    
}


console.log(add);