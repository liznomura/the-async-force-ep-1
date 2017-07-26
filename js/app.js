/*jshint esversion:6*/
const name4 = document.getElementById('person4Name');
const homeWorld4 = document.getElementById('person4HomeWorld');
const person14 = document.getElementById('person14Name');
const species14 = document.getElementById('person14Species');
const filmList = document.getElementById('filmList');


fetch('http://swapi.co/api/people/4/')
.then((res) => {
  return res.json();
})
.then((data) => {
  name4.innerHTML = data.name;
  return data;
})
.then((data) => {
  return fetch(data.homeworld);
})
.then((data) => {
  return data.json();
})
.then((data) => {
  homeWorld4.innerHTML = data.name;
});

fetch('http://swapi.co/api/people/14/')
.then((res) => {
  return res.json();
})
.then((data) => {
  person14.innerHTML = data.name;
  return data;
})
.then((data) => {
  return fetch(data.species);
})
.then((data) => {
  return data.json();
})
.then((data) => {
  species14.innerHTML = data.name;
});

fetch('http://swapi.co/api/films/')
.then((res) => {
  return res.json();
})
.then((data) => {
  return data.results;
})
.then((data) => {
  data.forEach( c => {
    let newLi = document.createElement('li');
    newLi.className = 'film';

    let filmTitleH2 = document.createElement('h2');
    filmTitleH2.className = 'filmTitle';
    filmTitleH2.innerHTML = c.title;

    let planetsH3 = document.createElement('h3');
    planetsH3.innerHTML = 'Planets';

    let filmPlanetsUl = document.createElement('ul');
    filmPlanetsUl.className = 'filmPlanets';

    c.planets.forEach( c => {
      let planetLi = document.createElement('li');
      planetLi.className = 'planet';
      let planetNameH4 = document.createElement('h4');
      planetNameH4.className = 'planetName';


      fetch(c)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        planetNameH4.innerHTML = data.name;
        planetLi.appendChild(planetNameH4);
        newLi.appendChild(planetLi);
      });
    });
    newLi.appendChild(filmTitleH2);
    newLi.appendChild(planetsH3);
    newLi.appendChild(filmPlanetsUl);
    filmList.appendChild(newLi);
  });
});

// let oReq5 = new XMLHttpRequest();
// oReq5.addEventListener('load', reqListener5);
// oReq5.open('GET', 'http://swapi.co/api/films/');
// oReq5.send();

// function reqListener5() {
//   filmObj = JSON.parse(this.responseText);
//   for(let i = 0; i < filmObj.results.length; i++) {
//     let newLi = document.createElement('li');
//     newLi.className = 'film';

//     let filmTitleH2 = document.createElement('h2');
//     filmTitleH2.className = 'filmTitle';
//     filmTitleH2.innerHTML = filmObj.results[i].title;

//     let planetsH3 = document.createElement('h3');
//     planetsH3.innerHTML = 'Planets';

//     let filmPlanetsUl = document.createElement('ul');
//     filmPlanetsUl.className = 'filmPlanets';
//     for(let j = 0; j < filmObj.results[i].planets.length; j++) {
//     let oReq6 = new XMLHttpRequest();
//     oReq6.addEventListener('load', function() {
//       planetObj = JSON.parse(this.responseText);
//     let planetNameH4 = document.createElement('h4');
//       planetNameH4.className = 'planetName';
//       planetNameH4.innerHTML = planetObj.name;

//       newLi.appendChild(planetNameH4);
//     });
//     oReq6.open('GET', filmObj.results[i].planets[j]);
//     oReq6.send();
//     }

//     newLi.appendChild(filmTitleH2);
//     newLi.appendChild(planetsH3);
//     newLi.appendChild(filmPlanetsUl);
//     filmList.appendChild(newLi);
//   }
// }