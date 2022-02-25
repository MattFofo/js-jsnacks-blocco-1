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

const userNum = prompt('inserisci un numero a 4 cifre'); 
console.log(typeof userNum);

arrUserNum = userNum.split('');
console.log(arrUserNum);

let add = 0;


for (let i = 0; i < arrUserNum.length; i++) {

    add = add + parseInt(arrUserNum[i]);
    
}

console.log(add);

*/