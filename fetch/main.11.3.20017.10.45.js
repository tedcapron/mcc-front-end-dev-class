const API = 'https://swapi.co/api/planets/';
let planets = [];
async function getPlanets(planetApi = API) {
    const response = await fetch(planetApi);
    const data = await response.json();
    console.log(data);
    planets = [...planets, ...data.results];
    console.log(planets);
    if (data.next) {
        getPlanets(data.next);
    };
};

getPlanets();
// console.table(planets);


////////////////////////////////////
// console.log('main.js loaded');

// fetch('https://swapi.co/api/people/1')
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(err => console.error('ERROR:', err));