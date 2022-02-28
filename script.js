// JS.SNACK - 1


/*

const num1 = parseInt(prompt('inserisci un numero'));
const num2 = parseInt(prompt('inserisci un numero'));

if (num1 > num2) {
    console.log(num1);

}else if (num1 == num2) {
    console.log('i numeri sono uguali');

}else {
    console.log(num2);
}


*/




////////////////////////////////////////////////////////////////////////





// JS.SNACK - 2

/*

const word1 = prompt('inserisci una parola');
const word2 = prompt("inserisci un'altra parola");

if (word1.length > word2.length) {
    console.log(`la parola ${word1} è più grande`);

}else if (word1.length == word2.length) {
    console.log(`la parola ${word1} e la parola ${word2} sono lunghe uguali`);
        

}else {
    console.log(`la parola ${word2} è più lunga`);

}

*/




///////////////////////////////////////////////////////////////////////////





// JS.SNACK - 3



/*

let arrNumUser = [];

for (let i = 0; i < 10; i++) {

    const numUser = parseInt(prompt('inserisci numero'));
    arrNumUser.push(numUser);
    
    
}
 let add = 0;

for (let i = 0; i < arrNumUser.length; i++) {

    add = add + arrNumUser[i];
}

console.log(add);




// metodo senza arrey

let add = 0;

for (let i = 0; i < 10; i++) {

    const numUser = parseInt(prompt('inserisci numero'));
    add = add + numUser;
    
    
}


console.log(add);

*/


/////////////////////////////////////////////////////////////////////




// JS.SNACK - 4


/*

const arrGuestList = ['marco' , 'marta' , 'giorgia' , 'luna' , 'serena' , 'antonio'];
const guestName = prompt('il tuo nome');


insideTheList = false;

for (let i = 0; i < arrGuestList.length; i++) {

    if (guestName.toLowerCase == arrGuestList[i].toLowerCase) {
        insideTheList = true;
        
    }   
}

if (insideTheList) {
    console.log('puoi entare');
    
}else {
    console.log('il tuo nome non è nella lista');
}


*/


///////////////////////////////////////////////////////////////////////





// JS.SNACK - 5


/*

let arrNum = []

for (let i = 0; i < 6; i++) {
    
    let numUser = parseInt(prompt('inserisci un numero'));

    if (numUser % 2 !== 0) {
        arrNum.push(numUser);
    }
    
}
console.log(arrNum);

*/



//////////////////////////////////////////////////////////////////////////




// JS.SNACK - 6


/*

const strUserNum = prompt('inserisci un numero a 4 cifre'); 

let add = 0;


for (let i = 0; i < strUserNum.length; i++) {

    add = add + parseInt(strUserNum[i]);
    
}

console.log(add);

*/



////////////////////////////////////////////////////////////////////////



// JS.SNACK - 7


/*

let sum = 0;
let average;


//metodo for
for (let i = 1; i <= 10; i++) {
    sum += i;
    console.log(i);
}

average = sum / 10;

console.log(sum, average);



//metodo while

let i = 1;
while (i <= 10) {
    sum += i;
    i++;  
}
average = sum / 10;
console.log(sum, average);

*/


/////////////////////////////////////////////////////////////////////

// JS.SNACK - 8


/*
let sum = 0;

for (let i = 0; i < 5; i++) {
    let userInput = parseInt(prompt('inserisci un numero'));

    sum += userInput;



    console.log(i, userInput);
}


console.log(sum);
*/


/*
let i = 0;

sum = 0;

while (i < 5) {
    let strUserInput = parseInt(prompt('inserisci numero'));

    sum += strUserInput;

    i++;


}

console.log(sum);
*/


////////////////////////////////////////////////////////////////////////////

// JS.SNACK - 9


/*

const numUser = parseInt(prompt('inserisci un numero'));

if (numUser % 2 == 0) {
    console.log(numUser);

} else {
    console.log(numUser + 1);
    
}

*/



// SNACK - 10


let arrListNames = ['franco', 'marco', 'laura', 'giulia', 'augusto', 'massimo', 'roberto', 'alessandra'];

let arrListSurnames = ['primo', 'secondo', 'terzo', 'quarto', 'quinto', 'sesto', 'settimo', 'ottavo'];

let arrListFake = [];



for (let i = 0; i < 3; i++) {

    let rngNumber1 = Math.floor(Math.random() * arrListNames.length);
    let rngNumber2 = Math.floor(Math.random() * arrListNames.length);

    arrListFake.push(arrListNames[rngNumber1] + ' ' + arrListSurnames[rngNumber2]);

}

console.log(arrListFake);



