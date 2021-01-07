// Reflect is a built-in object that simplifies creation of Proxy.

// It was said previously that internal methods, 
// such as [[Get]], [[Set]] and others are specification-only, they can’t be called directly.

// Simple 
let user = {};

Reflect.set(user, 'name', 'John');

console.log(user.name); // John

// Advace Example

// Reflect.get reads an object property.
// Reflect.set writes an object property and returns true if successful, false otherwise.


let user1 = {
    name: "John",
  };
  
  user1 = new Proxy(user1, {
    get(target, prop, receiver) {
        console.log(`GET ${prop}`);
      return Reflect.get(target, prop, receiver); // (1)
    },
    set(target, prop, val, receiver) {
        console.log(`SET ${prop}=${val}`);
      return Reflect.set(target, prop, val, receiver); // (2)
    }
  });
  
  let name1 = user1.name; // shows "GET name"
  user1.name = "Pete"; // shows "SET name=Pete"

  console.log(name1);
  console.log(user1.name);