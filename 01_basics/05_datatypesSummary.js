// primarily there are 2 types of datatypes in js officially
// primtive and non pritive
// these are classified on the basis of how datatypes are stored and accessed in memory

// Primitive datatype
// has some 7 categories : String, Number, Boolean, null (means empty, not zero or empty string)
// undefined (variable just declared not intialized), Symbol (to make some value unique, we wrap inside a symbol)
// BigInt (to cover some scientific values and very large number)

// these primitive datatypes are call by value, when they are copied, the original date from 
// that memory reference is not provided
// and the changes done are reflected in the copy not in the original one

// Reference datatype (non-primitive)
// the reference is directly allocated to memeory
// Arrays, Objects, Functions

// is js a dynamically typed language or static language ?
// in some languages we need to define the datatype that we are going to use
// so js is a dynamically typed languages, variables are determined in runtime

// also we can manually define the datatype 
const abc = undefined; // like this

// to declare a symbol
// if we want to delcare something unique

let id = Symbol('123'); // its return type is a also a string
let id1 = Symbol('123');

// even if the value inside is same symbol makes it unique
// each call to Symbol() generates a new and unique symbol even value passed is same

//console.log(id);
// console.log(id1);
// both the results appear same in console but...
// console.log(id==id1); // returns false
// symbol is used to avoid any codecrashes because it makes passed value as different one

const bigN = 23753928483293459345758479594793n;
// to store these kind of nums js automatically use bigint
// write n in last to represent its a bigInt, otherwise it is evaluated as number
// also we will loose precision
// console.log(typeof bigN);

const heroes = ["shaktiman", "naagraj", "doga"]; // this is an array
// in objects key value pairs are there
let myobj = {
    name: "Balreet",
    age: 20,
    department: "cse"
    // datatype can be anything string, number, boolean anything in objects even functions
    // arrays or even a different object
}

// to declare a function we use function keyword and we can also store it in a variable 
const myFunction = function(){} // it will return a function if we console the typeof myFunction
// returns function or more preisely function project

// ***** STACK AND HEAP

// in early languages like to reserve and free the memory, its a coder's job
// it has become difficult

// but now today's languages like js, memory control is not given to user

// there is two types of memory stack and heap
// Stack(primitive datatype), Heap(non-primitive)
// when stack memory is used, user gets the copy of the variable he declared
// when something is declared using heap memeory, it gives us the reference (original)
// so whatever is changed in heap reflects in original

// imagine stack like plates over one another

let userOne = "Balreet";
let userTwo = userOne;
// console.log(userOne);
// console.log(userTwo);
// same value is printed but the thing is userTwo is taking copy of value of userOne not 
// direct reference, we can check it by
userTwo = "Singh";
// console.log(userOne); 
// console.log(userTwo);
// userTwo is changed it means the new value overwrites the old one (which is the copy of userOne)
// so the original value of userOne is not changed

// now in case of heap

const user1 = {
    name:"Balreet",
    email:"balreet0310.be23@chitkara.edu.in"
}

const user2 = user1; // user2 directly accesses the memory reference where the data of user1 is stored
// not its copy

// we can access the value of user by using dot operator
// console.log(user1.emial);
// console.log(user2.emial);

user2.email = "balreetttaggar@gmail.com"; // this even changes the email for user1 
// because it directly changes the reference

console.log(user2.email);
console.log(user1.email); 






