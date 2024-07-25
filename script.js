'use strict';

document.querySelector('button').addEventListener('click', function () {
  getUsers();
});

function getUsers() {
  if (document.querySelector('h1')) {
    document.querySelector('h1').remove();
    document.querySelector('h2').remove();
  }

  fetch('https://randomuser.me/api/?results=1')
    .then(results => {
      return results.json();
    })
    .then(data => {
      const person = data.results[0];
      const firstName = person.name.first;
      const lastName = person.name.last;
      const phone = person.cell;
      const email = person.email;
      const age = person.dob.age;
      const country = person.location.country;
      const picture = person.picture.large;

      const imageContainer = document.getElementById('imageContainer');
      imageContainer.innerHTML = `<img src= "${picture}" width='200px' height='200px'>`;
      document.querySelector('.name').textContent = `${firstName} ${lastName}`;
      document.querySelector(
        '.first-name'
      ).textContent = `First Name: ${firstName}`;
      document.querySelector(
        '.last-name'
      ).textContent = `Last Name: ${lastName}`;
      document.querySelector('.location').textContent = `Location: ${country}`;
      document.querySelector('.age').textContent = `Age: ${age}`;
      document.querySelector('.phone').textContent = `Phone: ${phone}`;
      document.querySelector('.email').textContent = `Email: ${email}`;

      console.log(person);
      console.log(picture);
    });
}
