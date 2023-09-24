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
 const imageElement = document.getElementById('profileImage');
 
 /* Step 4 - Adding Content */
 nameElement.innerHTML = `<strong>${fullName}</strong>`;
 yearElement.textContent = currentYear;
 imageElement.setAttribute('src', profilePicture);
 imageElement.setAttribute('alt', `Profile image of ${fullName}`);
 
 /* Step 5 - Array */
 const favoriteFoods = ['tacos', 'quesibirria', 'tteokbokki', 'onigiri', 'strawberry', 'mango', 'menudo'];
 favoriteFoods.forEach(food => {
     const listItem = document.createElement('li');
     listItem.textContent = food;
     foodElement.appendChild(listItem);
 });





