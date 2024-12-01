const accountID = 12345;
let accountName = "balreet"
var accountCity = "dharamgarh";
accountPWD = 123; // we can even assign a value to varible without using keywords but not a good way
let accountState; // the value of this variable is undefined (only declaring a varible will lead to 
// undefined value)

// semicolons are optional in javascript
// accountID = 24; // this is not allowed in js cuz assignment to constant

accountName = "taggar"
accountCity = "sunam"
accountPWD = 100504

// use let instead of var cuz it has block scope

console.table([accountName, accountCity, accountPWD]) // rather than using console log multiple times
// use console.table and put all the names in brackets