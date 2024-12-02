"use strict"; // to treat all js code to newer version of javascript (newer standards)

// engine of js is in browser, thats why to run a js file we attach it with a html file to 
// make it working

// alert(3+3) // this statement will give a pop up on browser when we write this on a console
// but here we are using node js which has different syntax 

// study from mdn to read documentation and tc39

let name = "Balreet" // string datatype
let age = 20 // number datatype
let isLoggedIn = false // bolean

// number has a range of 2 to the power of 53 (range which is alloted to number by memory)
// bigInt has even a bigger range
// string, we can use single quotes or even double quotes, but use double quotes
// bolean, either true or false
// null is a datatype as well as a standalone value
// undefined = when value is not defined or assigned like we just declared a variable only
// so it default value will be undefined
// whereas null is a representation of empty value
// like let name = "" // its not null, its just empty string
let temperature = null // we have to assign the value of null
// example we requested a server to give us value of temperature, but server fails at some point
// and it returns 0 (as no response), but we dont want it 0(cuz its a temperature value)
// so we set the value to null

// symbol=unique // used for uniqueness, mostly will use in react, like which component is different from other

// object // will study later

console.log(typeof age); // number
console.log(typeof undefined); // undefined itself is a datatype
console.log(typeof null); // it will return us a object, so null is an object (will study it later)

