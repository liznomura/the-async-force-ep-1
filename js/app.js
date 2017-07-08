/*jshint esversion:6*/
let oReq = new XMLHttpRequest();
oReq.addEventListener('load', reqListener);
oReq.open('GET', 'http://swapi.co/api/people/4/');
oReq.send();


const name4 = document.getElementById('person4Name');
const homeWorld4 = document.getElementById('person4HomeWorld');

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