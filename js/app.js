/*jshint esversion:6*/
let oReq = new XMLHttpRequest();
oReq.addEventListener('load', reqListener);
oReq.open('GET', 'http://swapi.co/api/people/4/');
oReq.send();

const name4 = document.getElementById('person4Name');
const homeWorld4 = document.getElementById('person4HomeWorld');
const person14 = document.getElementById('person14Name');
const species14 = document.getElementById('person14Species');
const filmList = document.getElementById('filmList');

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
    newLi.appendChild(filmTitleH2);
    filmList.appendChild(newLi);
  }
}