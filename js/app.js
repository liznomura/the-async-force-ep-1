/*jshint esversion:6*/
let oReq = new XMLHttpRequest();
oReq.addEventListener('load', reqListener);
oReq.open('GET', 'http://swapi.co/api/people/4/');
oReq.send();

const name4 = document.getElementById('person4Name');
const homeWorld4 = document.getElementById('person4HomeWorld');
const person14 = document.getElementById('person14Name');

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
}