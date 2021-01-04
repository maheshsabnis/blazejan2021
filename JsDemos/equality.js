var x = 123;  // number
var y = "123"; // string

console.log(x == y); // returns 'true' value equality uses parser to read values instead of type of value

console.log(x === y); // return 'fasle', === is type and then value base equaity aka 'deep equality'
console.log(x !== y); // return true, !== not equal to