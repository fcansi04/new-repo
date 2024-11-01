"use strict";
/*
const email = "ferocansi04@gmail.com";
const login = " Ferocansi04@gmail.com";
console.log(login);
const lowerLogin = login.toLowerCase();
console.log(lowerLogin);
const newLogin = lowerLogin.trim();
console.log(newLogin);
*/

let f;
const g = function () {
  f = function () {
    console.log("closures testing");
  };
};
g();
f();
