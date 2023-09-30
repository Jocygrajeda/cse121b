/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    //this is the function body
    //return the sum of the parameters num1 & num2
    return number1 + number2;
}


// Using a function declaration, define another function named addNumbers
//that gets the values of two HTML form controls with IDs of add1 and add2. 
function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);


    //Next, in the addNumbers function, call the add function using
    //those two arguments and assign the return value to an HTML form element with an ID of sum
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

//Add a "click" event listener to the HTML button with an ID of addNumbers that calls the 
//addNumbers function. This line of code is NOT located inside a function. 
document.querySelector('#addNumbers').addEventListener('click', addNumbers);


//step 3
/* Function Expression - Subtract Numbers */

// Function Expression for subtraction
const subtract = function(number1, number2) {
    return number1 - number2;
  };
  
// Function Expression for getting values from HTML form controls and performing subtraction
const subtractNumbers = function() {
// Get values from HTML form controls and convert to numbers
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
};
  
  document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

//step 4
/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => {
    return number1 * number2;
};

const mulitplyNumbers = () => {
    let number1 = parseFloat(document.querySelector('#factor1').value);
    let number2 = parseFloat(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(number1, number2);
};

    document.querySelector('#multiplyNumbers').addEventListener('click', mulitplyNumbers);


//step 5
/* Open Function Use - Divide Numbers */

// Function Declaration for division
function divide(dividend, divisor) {
    return dividend / divisor;
  }
  
  // Function Declaration for getting values from HTML form controls and performing division
  function divideNumbers() {
    // Get values from HTML form controls and convert to numbers
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
  
    // Call the divide function and assign the result to the quotient HTML form element
    document.querySelector('#quotient').value = divide(dividend, divisor);
  }
  
  // Add a "click" event listener to the HTML button with an ID of divideNumbers
  document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);
  

/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
