# JavaScript App Development
1. Types
    - The ‘var’ aka variant datatypes is provided for accepting and storing any data entered by end-used        
    - using browser
    - Value parsing for variant
        - parseInt() / parseFloat()
        - String Types
        - Number Type 
        - Object Type 
            - Date Type
    - The  'var' uses the Parser to parse values from Left to Right to set the datatype aka type of a 
        declaration        

2. Operators
    -  + , - , *, / , >, < , >=, <=, !==, ==, ===
    - The '+' operator will change is behavior based on the operands
    - if one of the operand is string, then the '+' will used for string concatination
    - =, asignment statement
    - ==, the value comparision based on parsing from left to right of both sides of nexpression
        - e.g. x == y
            - the values of x and y will be parsed from Left to right and then equated
3. Objects
    - The 'object' is everything in JavaScript
    - The type that has properties and methods aka functions, but it is not a class instance like OOPs
    - Syntax
        - var obj = {};
            - Object Literal
                - Each data member (property) and method (function) is public by default
            - JavaScript Object Notation (JSON)
            - It is singlon for a declaring JavaScript file 
                - If ione object literal is assigned to other then bot objects will point to same location
    - Use Object.assign() to create same copy but different locations for the object
        - Syntax
            - var target = Object.assign({}, source);
                - the source object will be copied to blank object with schema and data and this balck object is assigned to target object 
    - The 'window' object
        - represents the browser instance
        - a client-side object to handle bowser and its events
    - The 'document' object 
        - represents a Document-Object-Model (DOM) loaded in browser
            - Used to extract an element from DOM aka HTML tree based on
                - id of the element
                    - document.getElementById('<ID>')
                        - returns a single DOM Element aka HTMLElement object
                - class attribute of the element
                    - document.getElementsByClassName()
                        - returns an array of HTMLElements having same class attribute value  
                - name attribute of the element
                    - document.getElementsByName()
                        - returns NodeList of HTMLElements having same name attribute value 
                - tag the element tag    
                      - document.getElementsTag()
                        - returns Collection of HTMLElements having same name attribute value 
            - document.addEventListener('<EVENT>', <CALL-BACK-FUNCTION>, <keepLive>)
                - used to attach or subscribe to an event of HTML element   
                    - EVENT, to be raised on DOM
                    - CALL-BACK-FUCNTION         
                        - the function to be exercuted whrn event raises
                    - keepLive
                        - a boolean whrn set to true the event will be kept attached to the DOM element throughot the lifecycle of then page else if false, the event will be released from the 'eventloop'    
4. Functions
    - Modular Approach aka Modularity
    - Best Practices
        - Limit the code inside the JavaScript Function
            - They may have input and /or output parameters
        - JSDOM supports the Function Object Model for Object-Oriented-Design (DOM 2+)
            - Reference Functions
                - Store the reference of a function in variant object
                - This contains publically exposed functions as well as the functions scopped within reference variant
                - Syntax
                    -  var x = function(){....} 
                - Used in library creation e.g. jQuery    
                - jQuery = function(){...} || $
                - Capability of writing extended logic using Prototype(?)    
                    - extension of the origincal reference variant by adding new functionalityn in it
                        - Like Inheritence
                            - Decorator Pattern using Open-Close Principal (OCP) 
                                - OCP, instead of modifying orignal object better extend it.

            - Function Object
                - Traditional JS function having its own body
                - CLose-Type function executed pre-created logic in it
                - Cannot be prototyped easily
                - May have input parameters
                - To use this as object for Object-Oriented-Design, this funciton MUST return a JSON object / object literal  
                    - All public returned functions and properties are defined using Key:Value pair separated by ','(comma)
                - Generally this is used for JavaScript Framework Creations    
            - Immediately Invocable Function Expression (IIFE)
                - (function(){})();
        - Standard Functions
            - String Object functions
            - Array Object Functions        
5. Iterations
6. Conditions
7. Collections
    - The Array collection that is used to store the data in it.
8. Events
    -  they are the UX for end-use so that the data can be accepted and will be delivered to end-user based on actions

==============================================================================================================================================

# ES 6 / High-Level JAVASCRIPT

Prerequisites
Node.js installed
    - https://www.nodejs.org
    - Install Node.js runtime for Server-Side JavaScript
    - Install the 'npm' utility, Node-Package-Manager
Visual Studio Code aka VSCode
    - https://code.visualstudio.com


1. Project Configuration
- The pcakage.json file
    - The configuration file for JavaScript based apps to create and manage project dependencies
    - the 'npm init -y' commans to create package.json
    - The 'dependencies' section
        - List of packages used for the running/execution of the application
        - npm install --save <PACKAGE-NAME>
    - The 'devDependencies' section
        - List of packages used only duriung development and testing of the application
        - npm install --save-dev <PACKAGE-NAME>
    - The 'scripts' section
        - Contains commands for following purposes
            - Execute / run -- start , the command is 'npm run start'
            - Build -- build, the command is 'npm run build'
            - Test  --  test, the command is 'npm run test'       
2. Using the dependencies for ES 6 Application Development         
    - Babel CLI, the command line interface for the Transpiling the ES 6 into ES 3
        - install the Babel-CLI on machine scope so that we can used it ftom command prompt
            - npm install -g @bable/cli (Windoes machine)
            - sudo npm install -g @babel/cli (MAC / LINUX)
        - Installing the package for the current project 
             - npm install --save-dev @babel/cli
    - Babel Core
        - Provides the core transpilation features
            - npm install -g @bable/core
            - npm install --save-dev @babel/core         
    "@babel/preset-env": "^7.12.11",
        - Bridge between the ES 6 High-level functionalities to execute them as it is in browser
    "@babel/preset-es2015": "^7.0.0-beta.53"        

# Babel Transpilation

babel <SOURCE-FIL>.js  -o <TARGET-FILE>.js
babel fileSource.js  -o fileTarget.js



3. ES 6 programming
    - Defining the Scope for a variable using 'let' keyword
        - This provided the BLOCK-SCOPE declaration for the variable
    - The String Interpolation aka Template String
        - New Syntax for Building an Immutable String Object by injecting the String variables as expressions
        - Syntax
            - `${<STRING-PROPERTY-1>} ${STRING-PROPERTY-2}....`    
        - Advantages
            - Creaing multi-line string object
            - Creating HTML String template
    - Iterators
        - symbol.iterator
            - an objet that is used to read elements from collections using iterations
        - for..of loop provided in ES 6      
    - Defining Constants
        - Using 'const' keyword
        - e.g. const val = 100;
        - const must be initialized          


# Array Method Demos



let values = ["Mahesh", "Suprotim", "Vikram", "Subodh", "Sumit", "Pankaj", "Saket", "Manish", "Abhijit", "Kumarmangalam"];

values.forEach((v,i)=>{
    if(v.length > 6){
        console.log(v);
    }
});

// return an array having length greater than

let res = values.filter((v,i)=>{
    return v.length > 6;
});

console.log(JSON.stringify(res));

console.log(JSON.stringify(values.sort()));

let sortByLengt = values.sort((v1,v2)=>{
    return v1.length - v2.length;
});

console.log(JSON.stringify(sortByLengt));


 sortByLengt = values.sort((v1,v2)=>{
    return v2.length - v1.length;
});

console.log(JSON.stringify(sortByLengt));


console.log(JSON.stringify(values.reverse()));

// using find 
// return the first match element based on condition and return it
// chrome,Edge, Firefox, Safari, opera

let findRes = values.find((v)=> {
    return v.length > 6;
});

console.log(findRes);


let values = ["Mahesh", "Suprotim", "Vikram", "Subodh", "Sumit", "Pankaj", "Saket", "Manish"];


// explict function

function printValeus(v,i){
    console.log(`Value at ${i}th position = ${v}`);
}

// pasing the explicitely defined callback function
values.forEach(printValeus);
console.log();
console.log('Passing Callback');

values.forEach(function(v,i){
    console.log(`Value at ${i}th position = ${v}`);
});

console.log();

console.log('ES 6 Arrow Operators');

// Arrow
// the callback is executed once for each element in array
// this does not return anything, instead just process an element

values.forEach((v,i)=> {
    console.log(`Value at ${i}th position = ${v}`);
});

console.log();
console.log('ES 6 map() like forEach added in ES 6 to read values as key value pair');

// for every element its creates a new array with the result returned by calling 
//  callback function for each element

values.map((v,i)=> {
    console.log(`Value at ${i}th position = ${v}`);
});


let myarr = [1,2,3,4,5];

myarr.forEach((n,idx)=> {
    // modifying an array inside the foreach by multiplying each element by 2
   return myarr[idx] = n *2;
});

console.log(`Doubled Output array ${JSON.stringify(myarr)}`);

let res = myarr.map((n,idx)=>{
    return n * 2;
});
console.log(`Doubled Output array ${JSON.stringify(res)}`);

let values = ["Mahesh", "Suprotim", "Vikram", "Subodh", "Sumit", "Pankaj", "Saket", "Manish"];


// explict function

function printValeus(v,i){
    console.log(`Value at ${i}th position = ${v}`);
}

// pasing the explicitely defined callback function

values.forEach(printValeus);
console.log();
console.log('Passing Callback');

values.forEach(function(v,i){
    console.log(`Value at ${i}th position = ${v}`);
});

console.log();
console.log('ES 6 Arrow Operators');

// Arrow
// the callback is executed once for each element in array
// this does not return anything, instead just process an element

values.forEach((v,i)=> {
    console.log(`Value at ${i}th position = ${v}`);
});

console.log();
console.log('ES 6 map() like forEach added in ES 6 to read values as key value pair');

// for every element its creates a new array with the result returned by calling 

//  callback function for each element
values.map((v,i)=> {
    console.log(`Value at ${i}th position = ${v}`);
});



# using rest parameters
- approach of pasing variable number of parameters to a method
- Syntax
    - function print(...arr){}
        - ... is a 'spread' operataor, used to build a immutable object to create a single array with varibale length 

    - print(1); print(1,2), print(1,2,3,,,,,,)
        - creates an 'argument' array, that create a 'immutable' array object
            - [...arguments, 1,2,3,4,,,,,,,,]


# New Collections
- Set
    - set of values with no duplicate records
    - Nop indexing for the records 
    - Methods and properties
        - add(value: T): this;
            - Add new entry
        - clear(): void;
            - Delete values or clear the set
        - delete(value: T): boolean;
            - delete a specific value
        - forEach(callbackfn: (value: T, value2: T, set: Set<T>) => void, thisArg?: any): void;
            - Iterartion
        - has(value: T): boolean;
            - check if the value is present
        - readonly size: number;
            - return size or number of records in set

- Map
    - USed to store data in Key/Value pair
    - Generally 'key' is string/numeric and value is object
    - clear(): void;
        - delete all records from map
    - delete(key: K): boolean;
        - delete a recod based on specific key
    - forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
        - Iteration
    - get(key: K): V | undefined;
        - read a value based on key
    - has(key: K): boolean;
        - check if a specific key is available 
    - set(key: K, value: V): this;
        - Add a new record in map
    - readonly size: number;
        - size of map



# Hands-on-Labs

Day 1: Create a Calcuator using JavaScript like Calculator Desktop application on Windows Machine.

Day 2: 

1. Create a String Object with multiple statements in it. Minimum 10 statements. 
The result should be shown on UI. The string must be accepted from the UI.
e.g
james bond is a mi 16 spy works for her majesty's govt. he has license to kill. his code is 007.

Write a JavaScript reference function with following operations on the string
1. Change the first character of each statement in uppercase
2. Change the string in title-case (first chcracter of each word in upper case)
3. Find out all words having 'a', 'i' in it.
4. Reverse each word in the string.
5. Replace blankspace of the string using - character. 

2. Create a CRUD application for Products and modify logic.js for following
    - do not accept duplicate records for Product based on ProductId
        - if the duplicate record exicts then validate it on the 'change' event of the ProductId input element
    - do not accept -ve values for Price    
        - Price validations
            - Minimum Price of Category ECT is 1000
            - For ECL is 20
            - FOD is 10    
    - Show error message if the Price vaidations fails         

    - Update the selected Product
        - Either select Product from TableRow and show its details in the input elements and CategoryName in select element
        - OR on change event of the ProductId search the Product object if it exists then load its details in the input elements and CategoryName in select element 
    - Use the save button for Creating new Product as well as updating existing product     


Generalize the Table HEader and Rows creation for product table


Day 3:

Create a map with Products Infromation based on Id, Name, Category, Price, Manufacturer. Create a HTML Table from the Map. The table should show all records from Map. Use Tamplate string to generate Rows and Heades for the table.

1. Add a Input Text element and Select element above the Table. The select element must show the properties of the Product object. When the user select a specific property from the select and enter the value for the property in Textbox (input element), the table should show data based on data entered in input element. E.g. If the 'Category' is selected from select element and the value entered in input element is 'ECT', then the table shoud how only recodrs for ECT category. (Immediately)

2. Add two radio buttons beside the input element for SORT and REVERSE. Based on the property selected from the select element the table should be sorted or reversed when corresponding radiobutton is clicked.
e.g. is property selectd from select element is ProductName and sort radio button is clicked then table should show all products sorted by ProductName (at most tomorrow)

