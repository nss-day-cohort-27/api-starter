"use strict";

console.log("main is in the house");

let db = require('./fetch-sw');

let button = document.getElementById("btn-planets");
button.addEventListener("click", db.getAllPlanets);