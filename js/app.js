/*jshint esversion:6*/
let oReq = new XMLHttpRequest();

const name4 = document.getElementById('person4Name');

function reqListener() {
  nameObj = JSON.parse(this.responseText);
  name4.innerHTML = nameObj.name;
  console.log(nameObj.name);
}

oReq.addEventListener('load', reqListener);
oReq.open('GET', 'http://swapi.co/api/people/4/');
oReq.send();
