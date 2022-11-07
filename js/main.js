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

console.log(numberArray)
const container = document.getElementById("container")

const boardNumber = document.createElement("div");
boardNumber.innerHTML = numberArray
container.append(boardNumber)
