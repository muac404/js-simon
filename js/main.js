"use strict"


// FUNCTIONS

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }




// MAIN



const numberArray = []

let i = 0

while (numberArray.length < 5) {
    const memoryNumber = getRndInteger(1, 100);
    if( !numberArray.includes(memoryNumber)){
        numberArray.push(memoryNumber); 
    }
    
    
    i++; 
}


const container = document.getElementById("container")

const number = document.createElement("div");
number.innerHTML = numberArray
container.append(number)

const timer = 30
// setTimeout(function(){
//     number.classList.add(".d-none")
// }, 3000)

setTimeout(function(){
    container.remove();
    
    
}, timer * 1000)

setTimeout(function(){
    const numeriIndovinati = [];
    for (let i = 0; i < 5; i++) {
        
        const userNumber = Number(prompt("Inserisci un numero da 1 a 100"));
        if (numberArray.includes (userNumber)) {
            numeriIndovinati.push((userNumber))
        } 
    }
    if (numeriIndovinati.length > 0){
        alert("Hai indovinato")
    } else {
        alert("Non hai indovinato")
    }
}, (timer + 1) * 1000)



// const array2 = []





// const numeriNonIndovinati = []

// if (numberArray.includes (array2[i])) {
//     numeriIndovinati.push((array2[i]))
// } else {
//     numeriNonIndovinati.push((array2[i]))
// }



