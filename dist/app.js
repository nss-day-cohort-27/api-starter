(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

// function showPlanets(planetArray) {
//    console.log("show me some planets", planetArray);
// }

function populatePage(item, index) {
   //make a div to put the rendered html
   let newDiv = document.createElement("div");
   newDiv.innerHTML = itemGrid(item, index);
   document.getElementById("container").append(newDiv);
}

function showFilmList(val) {
   let output = `<li><a href="${val}">${val}</a></li>`;
   return output;
}

function itemGrid(item, index) {
   console.log("itemGrid");
   let filmArray = item.films;
   let filmList;

   filmArray.forEach((item) => {
      filmList = (filmList) ? filmList + showFilmList(item) : showFilmList(item);
   });

   let output =
      `<section id="index--${index}" class="card-wrapper" style="border: 2px solid">
      <h3>Name: ${item.name}</h3>
      <h4>Planet featured in these films:</h4>
      <ul>
      ${filmList}
      </ul>
      <span><strong>Planet Terrain:</strong> ${item.terrain}</span>
      </section>`;
   return output;
}

module.exports = populatePage;
},{}],2:[function(require,module,exports){
"use strict";

let showPlanets = require("./dom-stuff");

let api_calls = {};
let base = "https://swapi.co/api";
console.log("here?");

api_calls.getAllPlanets = () => {
   console.log("happy to get all planets");

   //let planetFetch = () => {
   fetch(`${base}/planets`)
      .then(response => response.json())
      .then((planets)=>{
         console.log("planets",planets.results);
         planets.results.map(showPlanets);
      });
};




module.exports = api_calls;






















   // let planetXHR = new XMLHttpRequest();

   // planetXHR.addEventListener("load", function(){
   //    let data = JSON.parse(this.responseText);
   //    console.log("data in call", data);
   //    planets = data.results;
   //    /// show the planets
   //    // dom.showPlanets(planets);
   //    planets.map(dom.populatePage);

   // });

   // planetXHR.addEventListener("error", function (){
   //    console.log("you have an error with the XHR call - check spelling");
   // });

   // planetXHR.open("GET", `${base}/planets`);
   // planetXHR.send();











},{"./dom-stuff":1}],3:[function(require,module,exports){
"use strict";

console.log("main is in the house");

let db = require('./fetch-sw');

let button = document.getElementById("btn-planets");
button.addEventListener("click", db.getAllPlanets);
},{"./fetch-sw":2}]},{},[3]);
