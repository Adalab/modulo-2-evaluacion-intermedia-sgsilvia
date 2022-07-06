"use strict";
console.log("hola");

const inputNumber = document.querySelector(".js-inputNumber");

const btn = document.querySelector(".js-btn");
const clue = document.querySelector(".js-clue");

const count = document.querySelector(".js-count");

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
  let randomNumber = getRandomNumber(100);

console.log(randomNumber);

function addNumber() {
  const inputValue = parseInt(inputNumber.value);
  return inputValue ;

  
}

function compared() {
  const userNumber = addNumber();

  
  if (randomNumber > userNumber) {
    clue.innerHTML = "Demasiado bajo";
  } else {
   clue.innerHTML= "Demasiado alto";
  }
  if (randomNumber === userNumber ){clue.innerHTML= "Has  ganado" }
  
}

let contador = 0
function textContent ( ){ 
contador ++;
count.innerHTML = contador;

}

function handleclik(ev) {
  addNumber();
  compared();
  textContent();
}

btn.addEventListener("click", handleclik);
