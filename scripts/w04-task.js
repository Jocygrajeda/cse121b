let myProfile = {};

//
myProfile.name = "Jocelyne Sainz";
myProfile.photo = "images/IMG_2246.png";
myProfile.favoriteFoods = [
    'Avocado Toast',
    'Tacos',
    'Sushi',
    'Carlota',
    'Menudo'
];
myProfile.hobbies = [
 'Movies',
 'Drawing', 
 'Photography',
 'Traveling'];

myProfile.placesLived = [];

//
myProfile.placesLived.push({
    place: 'Cd. Obregon, Son,',
    length: '12 years'
});

//
myProfile.placesLived.push({
    place: 'San Bernardino, CA',
    length: '6 months'
});

myProfile.placesLived.push({
    place: 'Nacogdoches, TX',
    length: '10 years'
  });

// DOM Manipulation

//
document.querySelector('#name').textContent = myProfile.name;

const photoElement = document.getElementById('photo');
photoElement.src = myProfile.photo;
photoElement.alt = myProfile.name;

//
const favoriteFoodsList = document.querySelector('#favorite-foods');
myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.textContent = food;
  favoriteFoodsList.appendChild(li);
});

//
const hobbiesList = document.querySelector('#hobbies');
myProfile.hobbies.forEach(hobby => {
  let li = document.createElement('li');
  li.textContent = hobby;
  hobbiesList.appendChild(li);
});

//
const placesLivedList = document.querySelector('#places-lived');
myProfile.placesLived.forEach(item => {
  let dt = document.createElement('dt');
  dt.textContent = item.place;

  let dd = document.createElement('dd');
  dd.textContent = item.length;

  placesLivedList.appendChild(dt);
  placesLivedList.appendChild(dd);
});
