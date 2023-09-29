/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    //this is the function body
    //return the sum of the parameters num1 & num2
    return number1 + number2;
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);
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
