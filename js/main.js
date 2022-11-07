"use strict"


// FUNCTIONS

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }



function displaynone(){
    number.classList.add(".d-none")
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

setTimeout(function(){
    number.classList.add(".d-none")
}, 3000)



const array2 = []


for (let i = 0; i < 5; i++) {
    const userNumber = Number(prompt("Inserisci un numero da 1 a 100"));
    array2.push(userNumber)
}

console.log(numberArray, array2)

