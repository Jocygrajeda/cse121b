console.log("Script is running");

/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
/*A const declaration is OK to use to declare this variable
 because the value will not change in this application.*/
 let fullName = "Jocelyne Sainz";
 let currentYear = new Date().getFullYear();
 let profilePicture = 'images/IMG_2246.png';
 
 /* Step 3 - Element Variables */
 const nameElement = document.getElementById('name');
 const foodElement = document.getElementById('food');
 //Note the # in the selector string to indicate the id attribute value.
 const yearElement = document.querySelector('#year');
 const imageElement = document.querySelector('picture img');

 /* Step 4 - Adding Content */
 nameElement.innerHTML = `<strong>${fullName}</strong>`;
 yearElement.textContent = currentYear;
 //imageElement.setAttribute('src', profilePicture);
 //imageElement.setAttribute('alt', `Profile image of ${fullName}`);
 imageElement.src = 'images/IMG_2246.png';
 imageElement.alt = 'Profile image of Jocelyne Sainz';
 
 /* Step 5 - Array */
 
/*
this put it in a list instead 
const favoriteFoods = ['tacos', 'quesibirria', 'tteokbokki', 'onigiri', 'strawberry', 'mango', 'menudo'];
 favoriteFoods.forEach(food => {
     const listItem = document.createElement('li');
     listItem.textContent = food;
     foodElement.appendChild(listItem);
 });*/

/* Step 5 - Array */
let favoriteFoods = ['tacos', 'quesibirria', 'tteokbokki', 'onigiri', 'strawberry', 'mango'];
let favFood = ['Menudo'];
favoriteFoods.push(favFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.splice(0, 1);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;