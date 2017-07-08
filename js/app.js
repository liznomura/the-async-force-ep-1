/*jshint esversion:6*/
const name4 = document.getElementById('person4Name');
const homeWorld4 = document.getElementById('person4HomeWorld');
const person14 = document.getElementById('person14Name');
const species14 = document.getElementById('person14Species');
const filmList = document.getElementById('filmList');

let oReq = new XMLHttpRequest();
oReq.addEventListener('load', reqListener);
oReq.open('GET', 'http://swapi.co/api/people/4/');
oReq.send();

function reqListener() {
  nameObj = JSON.parse(this.responseText);
  name4.innerHTML = nameObj.name;

let oReq2 = new XMLHttpRequest();
oReq2.addEventListener('load', reqListener2);
oReq2.open('GET', nameObj.homeworld);
oReq2.send();
}

function reqListener2() {
 homeworldObj = JSON.parse(this.responseText);
 homeWorld4.innerHTML = homeworldObj.name;
}

let oReq3 = new XMLHttpRequest();
oReq3.addEventListener('load', reqListener3);
oReq3.open('GET', 'http://swapi.co/api/people/14/');
oReq3.send();

function reqListener3() {
  name14Obj = JSON.parse(this.responseText);
  person14.innerHTML = name14Obj.name;

  let oReq4 = new XMLHttpRequest();
  oReq4.addEventListener('load', reqListener4);
  oReq4.open('GET', name14Obj.species);
  oReq4.send();
}

function reqListener4() {
  speciesObj = JSON.parse(this.responseText);
  species14.innerHTML = speciesObj.name;
}

let oReq5 = new XMLHttpRequest();
oReq5.addEventListener('load', reqListener5);
oReq5.open('GET', 'http://swapi.co/api/films/');
oReq5.send();

function reqListener5() {
  filmObj = JSON.parse(this.responseText);
  for(let i = 0; i < filmObj.results.length; i++) {
    let newLi = document.createElement('li');
    newLi.className = 'film';

    let filmTitleH2 = document.createElement('h2');
    filmTitleH2.className = 'filmTitle';
    filmTitleH2.innerHTML = filmObj.results[i].title;

    let planetsH3 = document.createElement('h3');
    planetsH3.innerHTML = 'Planets';

    let filmPlanetsUl = document.createElement('ul');
    filmPlanetsUl.className = 'filmPlanets';
    for(let j = 0; j < filmObj.results[i].planets.length; j++) {
    let oReq6 = new XMLHttpRequest();
    oReq6.addEventListener('load', function() {
      planetObj = JSON.parse(this.responseText);
    let planetNameH4 = document.createElement('h4');
      planetNameH4.className = 'planetName';
      planetNameH4.innerHTML = planetObj.name;

      newLi.appendChild(planetNameH4);
    });
    oReq6.open('GET', filmObj.results[i].planets[j]);
    oReq6.send();
    }

    newLi.appendChild(filmTitleH2);
    newLi.appendChild(planetsH3);
    newLi.appendChild(filmPlanetsUl);
    filmList.appendChild(newLi);
  }
}