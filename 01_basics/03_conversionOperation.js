// let score = 33;

// console.log(typeof score) // will give us a number
// console.log(typeof(score)) // second method to write this
// but sometimes we will request a value from server then we wouldnt be sure about the type of 
// datatype

// let score = "33"; //string
// console.log(typeof(score))

// to do operations in numbers we have to convert into number

// let valueInNumber = Number(score); // this will convert into number. "Number" is class bases (will read further)
// "Number" this captial format converts the datatype
// console.log(typeof(valueInNumber))

// let score = "33abc";
// console.log(typeof(score));

// let valueInNumber = Number(score);
// console.log(valueInNumber); // NaN = Not a Number
// console.log(typeof(valueInNumber)); // but still showing datatype is number because js converted it forcefully

// let score = null;
// console.log(typeof(score)); // null is an object so it will show datatype = object

// let valueInNumber = Number(score); // it will convert into number
// console.log(valueInNumber); // null is empty so converting into a number will give us zero
// console.log(typeof(valueInNumber)); // type of this will be number

// let score = undefined;
// console.log(typeof(score)); // undefined

// let valueInNumber = Number(score); // converts into a number
// console.log(valueInNumber); // NaN = Not a Number
// console.log(typeof(valueInNumber)); // number

// let score = Number; // is we assign here "Number, String, Boolean..." (Uppercase then it would return a function)
// // because all of these are functions which converts datatypes
// console.log(typeof(score));

// let valueInNumber = Number(score);
// console.log(valueInNumber); // NaN = Not a Number
// console.log(typeof(valueInNumber)); 

// let score = false;
// console.log(typeof(score)); // boolean

// let valueInNumber = Number(score); // converts into a number
// console.log(valueInNumber); // 0
// console.log(typeof(valueInNumber)); // number

// "33" => 33;
// "33abc" => NaN (but its type is number)
// true => 1; false => 0 

// let isLoggedIn = 1;
// console.log(typeof isLoggedIn); // number

// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn); // true
// console.log(typeof(booleanIsLoggedIn)); //boolean

// let isLoggedIn = "";
// console.log(typeof isLoggedIn); // string

// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn); // true
// console.log(typeof(booleanIsLoggedIn));

// empty string converted to boolean will result to false value otherwise true value

// 1 => true, 0=> false
// "" => false
// "balreet" => true

// let someNumber = 33;

// let stringNumber = String(someNumber);
// console.log(stringNumber); // 33
// console.log(typeof(stringNumber)) // strings

// ********** OPERATIONS ************* //

// let value = 3;
// let negValue = -(value) // or negValue = -value;
// console.log(negValue);

// we can perform various operations in console itself
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**3); // this is for exponentiation (2 raise to power 3);
// console.log(2%3); // this is remainder 

// let str1 = "hello ";
// let str2 = "balreet";
// // only addition in strings not subtraction
// let str3 = str1+str2; 
// console.log(str3);

// console.log("1" + 2); // 12
// console.log(1 + "2"); // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32

// if string is first then others are also treated as strings
// if string is in last then first arithematics will be performed

// console.log(true); // true
// +true is possible it will convert boolean to number that is 1
// but true+ is not possible it will give an error

// console.log(+""); // "" is empty string boolean value false so + converts into number i.e. 0

// let num1, num2, num3;
// num1 = num2 = num3 = 2+2; // not a good code it should be readable enough

// let gameCounter=100;
// console.log(gameCounter++); //100
// console.log(++gameCounter); // 101
