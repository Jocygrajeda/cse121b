
let myProfile = {
  name: "Jocelyne Sainz",
  photo: "images/IMG_2246.png",
  favoriteFoods: ['Avocado Toast','Tacos','Sushi','Carlota', 'Menudo'],
  hobbies: ['Movies', 'Drawing', 'Photography', 'Traveling'],
  placesLived: []
};

// outside
myProfile.placesLived.push({
  place: 'Cd. Obregon, Son,',
  length: '12 years'
}
);

//
myProfile.placesLived.push({
  place: 'San Bernardino, CA',
  length: '6 months'
}
);

myProfile.placesLived.push({
  place: 'Nacogdoches, TX',
  length: '10 years'
}
);

//dom
document.querySelector('#name').textContent = myProfile.name;

const photoElement = document.getElementById('photo');
photoElement.src = myProfile.photo;
photoElement.alt = myProfile.name;

//
const favoriteFoodsList = document.querySelector('#favorite-foods');
myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.textContent = food;
  document.querySelector('#favorite-foods').appendChild(li);
  //favoriteFoodsList.appendChild(li);
});

//
const hobbiesList = document.querySelector('#hobbies');
myProfile.hobbies.forEach(hobby => {
  let li = document.createElement('li');
  li.textContent = hobby;
  document.querySelector('#hobbies').appendChild(li);
  //hobbiesList.appendChild(li);
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
