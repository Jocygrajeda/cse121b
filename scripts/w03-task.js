/* LESSON 3 - Programming Tasks */
/*Add Numbers */
function add (number1, number2){ 
  return number1 + number2;
}

function addNumbers () {
  let addNumber1 = Number(document.querySelector("#add1").value);
  let addNumber2 = Number(document.querySelector("#add2").value);

  let sumID = document.querySelector("#sum").value = add(addNumber1, addNumber2);
}

const buttonElement = document.querySelector("#addNumbers");
buttonElement.addEventListener("click", addNumbers)

/*Subtract Numbers */
function subtract (number1, number2){ 
  return number1 - number2;
}

function subtractNumbers () {
  let subtractNumber1 = Number(document.querySelector("#subtract1").value);
  let subtractNumber2 = Number(document.querySelector("#subtract2").value);

  let sumID1 = document.querySelector("#difference").value = subtract(subtractNumber1, subtractNumber2);
}

const buttonElement1 = document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers)

/*Multiply Numbers */
let multiply = (number1, number2) => number1 * number2;

let multiplyNumbers = () => {
  let multiplyNumber1 = Number(document.querySelector("#factor1").value);
  let multiplyNumber2 = Number(document.querySelector("#factor2").value);

  let sumID3 = document.querySelector("#product").value = multiply(multiplyNumber1, multiplyNumber2);
}

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers)

/* Divide Numbers */
let divide = (number1, number2) => number1 / number2;

let divideNumbers = () => {
  let divideNumber1 = Number(document.querySelector("#dividend").value);
  let divideNumber2 = Number(document.querySelector("#divisor").value);

  document.querySelector("#quotient").value = divide(divideNumber1, divideNumber2);
}

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers)

/* Decision Structure */
let currentDate = new Date ();
let currentYear = currentDate.getFullYear();

document.querySelector("#year").value = currentYear;

/*array methods*/
//const numbersA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  
//Assign the value of the array variable to the HTML element with an ID of array. 
document.querySelector("#array").textContent = numbersArray;

//Use the filter() array method to find all of the odd numbers of the array variable
// and assign the result to the HTML element with an ID of odds
const odds = numbersArray.filter((numbers) => numbers % 2 !== 0);
document.querySelector("#odds").textContent = odds;

//Use the filter() array method to find all of the even numbers of the
// array variable and assign the result to the HTML element with an ID of evens. 
const evens = numbersArray.filter((numbers) => numbers % 2 !== 1);
document.querySelector("#evens").textContent = evens;
