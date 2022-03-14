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


// let arrListNames = ['franco', 'marco', 'laura', 'giulia', 'augusto', 'massimo', 'roberto', 'alessandra'];

// let arrListSurnames = ['primo', 'secondo', 'terzo', 'quarto', 'quinto', 'sesto', 'settimo', 'ottavo'];

// let arrListFake = [];



// for (let i = 0; i < 3; i++) {

//     let rngNumber1 = Math.floor(Math.random() * arrListNames.length);
//     let rngNumber2 = Math.floor(Math.random() * arrListNames.length);

//     arrListFake.push(arrListNames[rngNumber1] + ' ' + arrListSurnames[rngNumber2]);
//     console.log(rngNumber1, rngNumber2);
// }

// console.log(arrListFake);



///////////////////////////////////////////////////////////////////////////////////////////////

// SNACK 11

/*
const arrCars = [{
    marca: 'fiat',
    modello: 'punto',
    alimentazione: 'metano'

},
{
    marca: 'fiat',
    modello: 'punto',
    alimentazione: 'benzina'

},
{
    marca: 'fiat',
    modello: 'y',
    alimentazione: 'gpl'
},
{
    marca: 'opel',
    modello: 'astra',
    alimentazione: 'diesel'

},
{
    marca: 'BMW',
    modello: 'Z3',
    alimentazione: 'benzina'

},
{
    marca: 'jeep',
    modello: 'renegade',
    alimentazione: 'diesel'
},
{
    marca: 'fiat',
    modello: 'virgola',
    alimentazione: 'benzina'
},
{
    marca: 'fiat',
    modello: 'duepunti',
    alimentazione: 'metano'

},
{
    marca: 'fiat',
    modello: 'slash',
    alimentazione: 'benzina'

},
{
    marca: 'fiat',
    modello: 'dot',
    alimentazione: 'benzina'
}];

const arrBenzina = [];
const arrDiesel = [];
const arrAltraAlimentazione = [];


for (let i = 0; i < arrCars.length; i++) {
    const alimentazione = arrCars[i]['alimentazione']
    if (alimentazione == 'benzina') {
        arrBenzina.push(arrCars[i])

    }else if (alimentazione == 'diesel') {
        arrDiesel.push(arrCars[i])

    }else {
        arrAltraAlimentazione.push(arrCars[i])

    }
}

console.log(arrBenzina)
console.log(arrDiesel)
console.log(arrAltraAlimentazione)

*/


//SNACK 12 
/*
Generare un array di 10 gatti con nome, sesso ed età
Stampare le informazioni dei gatti in una lista con i maschi in blu e le femmine in rosa con opacità massima al gatto più vecchio e minima (0.2) al più giovane.
*/

const arrCats = [
    {
        name: 'Jerry',
        sex: 'male',
        age: '4'

    },
    {
        name: 'Max',
        sex: 'male',
        age: '6'

    },
    {
        name: 'Ginger',
        sex: 'female',
        age: '7'

    },
    {
        name: 'Alex',
        sex: 'male',
        age: '5'

    },
    {
        name: 'Nina',
        sex: 'female',
        age: '2'

    },
    {
        name: 'Annie',
        sex: 'female',
        age: '1'

    },
    {
        name: 'Max',
        sex: 'male',
        age: '3'

    },
    {
        name: 'Sam',
        sex: 'male',
        age: '4'

    },
    {
        name: 'Marie',
        sex: 'female',
        age: '5'

    },
    {
        name: 'Sophie',
        sex: 'female',
        age: '3'

    }
];


const eleContainer = document.querySelector('.container');
const arrCatsAgesOrdered = arrCats.map(cat => cat.age).sort();
console.log(arrCatsAgesOrdered)

//trovo l'età massima dei gatti
const maxAge = Math.max(...arrCatsAgesOrdered);
console.log(maxAge)


arrCats.forEach(cat => {
    const eleCat = document.createElement('div');
    eleCat.innerHTML = cat.name + ' ' + cat.age;
    eleCat.style.opacity = (cat.age*.90) / maxAge; // opacity : age = 0.90 : maxAge
    eleCat.style.color = cat.sex == 'male' ? 'blue' : 'red';


    eleContainer.append(eleCat);
})