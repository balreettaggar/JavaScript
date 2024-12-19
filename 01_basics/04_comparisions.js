// console.log(2>1);
// console.log(2<=1);
// these comparisions will return a boolean value (true or false)

// console.log("2">1);
// console.log("02">1);
// js converted strings into numbers for conversion 
// but sometimees the comparision between different datatypes gives unusual result
// so better to use equality operator

// console.log(null > 0); // null has empty value
// console.log(null == 0);
// console.log(null >= 0);

// equality operator == and comparision operator >,<,>=,<= work differently
// equality operator just checks the value whereas the comparision operator changes the datatype
// null is converted into 0 and checked whether is right or not so line no 12 gives true value

// console.log(undefined > 0);
// console.log(undefined == 0)
// console.log(undefined < 0);
// it will return false cuz undefined has no value

// === checks values and datatypes as well
// == converts the datatype and checks the value
// console.log("3"==3); // true
// console.log("3"===3); // false