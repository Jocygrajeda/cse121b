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



/* Arrow Function - Multiply Numbers */


/* Open Function Use - Divide Numbers */


/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
