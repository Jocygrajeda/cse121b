// Declare a new object literal variable named myProfile
let myProfile = {};

//Add properties to the myProfile object
myProfile.name = "Jocelyne Sainz";
myProfile.photo = "path/to/your/IMG_2246.png";
myProfile.favoriteFoods = [
  'Avocado Toast',
  'Tacos',
  'Sushi',
  'Carlota',
  'Menudo'
],

myProfile.hobbies = ['Movies',
 'Drawing', 
 'Photography',
 'Traveling'];
myProfile.placesLived = [];

// Using code outside of the myProfile definition, add an item to the placesLived array
myProfile.placesLived.push({
    place: 'Cd. Obregon, Son,',
    length: '12 years'
  });

myProfile.placesLived.push(
    {
  place: 'San Bernardino, CA',
  length: '6 months'
}
);

// Add additional object literals to the placesLived array for each place you have lived
myProfile.placesLived.push({
  place: 'Nacogdoches, TX',
  length: '10 years'
});


// DOM Manipulation

// Assign values to HTML elements
document.querySelector('#name').textContent = myProfile.name;

const photoElement = document.getElementById('photo');
photoElement.src = myProfile.photo;
photoElement.alt = myProfile.name;

// Display favorite foods using forEach loop
const favoriteFoodsList = document.querySelector('#favorite-foods');
myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.textContent = food;
  favoriteFoodsListvoriteFoodsList.appendChild(li);

// Display hobbies
const hobbiesList = document.querySelector('#hobbies');
myProfile.hobbies.forEach(hobby => {
  let li = document.createElement('li');
  li.textContent = hobby;
  hobbiesList.appendChild(li);
});

// Display places lived
const placesLivedList = document.querySelector('#places-lived');
myProfile.placesLived.forEach(item => {
  let dt = document.createElement('dt');
  dt.textContent = item.place;

  let dd = document.createElement('dd');
  dd.textContent = item.length;

  placesLivedList.appendChild(dt);
  placesLivedList.appendChild(dd);
)}