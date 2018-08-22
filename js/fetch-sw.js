"use strict";

let showPlanets = require("./dom-stuff");

let api_calls = {};
let base = "https://swapi.co/api";

api_calls.getAllPlanets = () => {
   console.log("happy to get all planets");

   fetch(`${base}/planets`)
      .then(response => response.json())
      .then((taco)=>{
         console.log("planets",taco.results);
         // taco.results.map(showPlanets);
         taco.results.forEach(showPlanets);
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










