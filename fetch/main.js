console.log('main.js loaded');

fetch('https://swapi.co/api/people/1')
.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.error('ERROR:', err));



