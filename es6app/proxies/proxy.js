// A Proxy is created with two parameters:
// target: the original object which you want to proxy
// handler: an object that defines which operations will be intercepted and how to redefine intercepted operations.

const target = {
    message1: "hello",
    message2: "everyone"
  };
  
  const handler1 = {};
  
  const proxy1 = new Proxy(target, handler1);

  console.log(proxy1.message1); // hello
console.log(proxy1.message2); // everyone

// adding method to proxy
let numbers = [0, 1, 2];

numbers = new Proxy(numbers, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      return 0; // default value
    }
  }
});

console.log( numbers[1] ); // 1
console.log( numbers[123] ); // 0

// SOme More Example

let dictionary = {
    'Hello': 'Hola',
    'Bye': 'Adiós'
  };
  
  dictionary = new Proxy(dictionary, {
    get(target, phrase) { // intercept reading a property from dictionary
      if (phrase in target) { // if we have it in the dictionary
        return target[phrase]; // return the translation
      } else {
        // otherwise, return the non-translated phrase
        return phrase;
      }
    }
  });
  
  // Look up arbitrary phrases in the dictionary!
  // At worst, they're not translated.
  console.log(dictionary['Hello'] ); // Hola
  console.log(dictionary['Welcome to Proxy']); // Welcome to Proxy (no translation


  // Proxy with the va;idations
  let numbers1 = [];

numbers1 = new Proxy(numbers1, { // (*)
  set(target, prop, val) { // to intercept property writing
    if (typeof val == 'number') {
      target[prop] = val;
      return true;
    } else {
      return false;
    }
  }
});

numbers1.push(1); // added successfully
numbers1.push(2); // added successfully
console.log("Length is: " + numbers.length); // 2

// UnComment this line for execution
//numbers1.push("test"); // TypeError ('set' on proxy returned false)

console.log("This line is never reached (error in the line above)");


// Iteration with “ownKeys” and “getOwnPropertyDescriptor”

let user = {
    name: "John",
    age: 30,
    _password: "***"
  };
  
  user = new Proxy(user, {
    ownKeys(target) {
      return Object.keys(target).filter(key => !key.startsWith('_'));
    }
  });
  
  // "ownKeys" filters out _password
  for(let key in user) console.log(key); // name, then: age
  
  // same effect on these methods:
  console.log( Object.keys(user) ); // name,age
  console.log( Object.values(user) ); // John,30