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


# Object Oriented Programming (OOPs)

- Default is public for functions
- The public data members must be declared through constructor() function
- The public data members must be declared using ‘this’ prefix e.g. this.x
- The 'extends' keyword for inheritance
- The derived class constructor must have 'super();' call to access the base class constructor 
- The class name must use 'Pascal-Case' (Mandatory in ES 6 based libraries and Frameworks e.g. React,Angular, etc)
- In ES 6 the class level member declarations is not allowed in High-Level-JavaScript
- DO not use the 'function' keyword for declaring function inside the class, it is not supported
- class methods are 'public' by default but not necessary to use 'this' prefix for them 

- ES 6 OOPs Some Questions
    - Can we have multiple constructors() in class?
        - Not Supported it is a Syntax Error
    - Can we have method overloading in class?
        - Transpilation will not produce errors
        - While running the JS Parser will overwrrite the earlier method with later added same name method
        - The parser will generate logically incorrect results is the method signerure is not followed while aceesing it.    
        - CONCLUSION: NO METHOD OVERLOADING
    - Can we have Static member declaration (data members / methods)?
        - YES
        - use 'static' keyword
        - install @babel/plugin-proposal-class-properties package to use Static data members
            - npm install --save-dev @babel/plugin-proposal-class-properties   
            - add .babelrc file in the project and define the class properties plug-in to supprt static properties 
    - Can we have instance properties?
        - using 'this.' prefix
        - getter and setters  
            - get and set prototype methods
                - the public wrapper on instance property members to execute custom logic on instance members when the value is assigned to it
            - use instance properties as getter and setter to design 'smart public fields'
            - read-only property will have the only getter
    - Plug-In to support Private methods
        - npm install --save-dev @babel/plugin-proposal-private-methods

    - Implementing the Inheritance
        - use 'extends' keyword
    - Is Abstract Class supported in ES 6 or ES2015?
        - ES 6 or ES2015 does not have support
        - Instead we can create abstarct class using 'new' moniker


                   

# .babelrc code

{
    "presets": [
        "@babel/preset-env"
    ],
    "plugins": [
        "@babel/plugin-proposal-class-properties"
    ]
}

https://apiapptrainingnewapp.azurewebsites.net/api/Products

# Promises
    - The Server generates an Acknowledgemenent (PROMISE) the client subscribe to the promise
    - The client is free to perorm other operations
    - When the server is ready it generates response to client through notification
        - Success
        - Fail
    - The client performs operations based on the response
        - Resolve for Success and complete operation
        - Reject for Fail and log the failure operation and complete
    - Used in JavaScript in following scenarios
        - The Operations which are not bound to time based execution
        - Calls to any external resources
            - Socket Calls for REAL-TIME Apps
            - HTTP Calls to REST APIs
                - HTTP Status codes
                    - OK --> 200
                    - CREATED --> 201
                    - UNAUTHORIZED --> 401
                    - INTERNER SREVER ERROR --> 500
                    - NOT FOUND --> 404
                - AJAX Calls
                    - XmlHttpRequest object
                        - ES Standard for AJAX Calls
                        - Default Async Behavior
                        - Methods
                            - open()
                                - Initite the request to external service over HTTP
                                    - method: GET / POST/ PUT / DELETE
                                    - url: the http url
                                    - username & password
                            - send()
                                - make request and wait for date from server for GET request
                                - send(data), used in case of POST and PUT request
                            - setRequestHeader()
                                - Pass the header information
                                    - POST and PUT
                                        - pass the 'Content-Type', the data format to be posted to the server
                                    - If the Security is used
                                        - AUTHORIZATION       
                    - Pure ES 6 AJAX Object
                        - The 'fetch()' object
                            - returns Promse out-of-the-box   
                    - ES 6 Promise Libraries
                        - 'Q', 'Bulebird', axios                                            
            - Download and Upload Operations
        - Processing high volume data 
            - Sorting and reversing collections
            - search records from collections
    - The 'Promise' object
        - The Resolve and Reject Callbacks
        - Async keyword is async
        - Await keyword is await                     

# Itretors
    - Used to perform the data read operations from collections or range based data structures
        - collections
            - Array, Set, Map 
        - for..of 
        - range based data structures
            - custom collections declared as per need in JavaScript Code     

let arr = []; -> 0
arr.push(10); --> 1 

for(let i=0;i<arr.length;i++>){.....}

for(let i of arr){......}

sysmbol.iterator(arr); start from 0 and advance to next till end of collection is not arrived
    - current, return the current result
    - if(next) {next}, advance to next entry in collection
0,1,2....infinity


# Generators
    - Mechanism to simplify the iterators
    - function contains iteration logic using for..loop or for..of loop
    - can be easily generilized for any data type
    - It 'yield' (read and return) the record on current index and advance itself (move to the next record) 
    - the 'next()' function is available by default 
    - defined usig 'function*' syntax
        - function* myFunction(){.......}, myFunction() is geerator
    - used in SAGA extensively, the library for managing ajax calls uin react-redux apps    
# Proxy
    - The 'Proxy()' object in ES 6
        - have rules to read and write data to and from the original object
    - const pxy = new Proxy(target, handler);
    - handler is the interceptor that intercepts incommin requests from the client
    - target is the original object to be proxied of which data/properties will be delivered to client using taregt    
# Destructuring



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

Create a map with Products Infromation based on Id, Name, Category, Price, Manufacturer. 

- Create Map() object and call set() method and pass the Product JSON object to it (4) records
Create a HTML Table from the Map. The table should show all records from Map.

- Iterate over the Map() using for.loop, for..of. INside loop generate <tr><td> and inside <td> display property for each product record
 
 Use Tamplate string to generate Rows and Heades for the table.
 `<tr><td>${prd.ProductId}</td><td>${prd.ProductName}</td></tr>`

1. Add a Input Text element and Select element above the Table. 
- <input type=text> <select> 

The select element must show the properties of the Product object. 
- Read all proprties from product object from Map() using Object.keys()
- Iterate over these keys and generate <option> for <select> in the iteration (for loop)

When the user select a specific property from the select and enter the value for the property in Textbox (input element), the table should show data based on data entered in input element. E.g. If the 'Category' is selected from select element and the value entered in input element is 'ECT', then the table shoud how only recodrs for ECT category. (Immediately)

2. Add two radio buttons beside the input element for SORT and REVERSE. Based on the property selected from the select element the table should be sorted or reversed when corresponding radiobutton is clicked.
e.g. is property selectd from select element is ProductName and sort radio button is clicked then table should show all products sorted by ProductName (at most tomorrow)

Day 4: 
1. Create a class  that performs following operations
    - Should contain a method to create a Map() of employees
        - EmpNo, EmpName, DeptNo, Designation, Salary
    - Should contain Map() for Deptrtment as follows
        - DeptNo, DeptName, Location and Cacapity
    - The class must have a private method of name Validate(emp) that perorms following
        - Make sure that the EmpNo is Positive and Unique
        - Make sure that the EmpName start from Uppercase
        - Make sure that if the Department has the capacity to accept new employee, if the capacity of the Department is full must throw the Error
        - The Salary should not be -Ve
    - The class must have following public methods
        - AddEmployee(emp)
        - UpdateEmployee(key, emp)
        - DeleteEmployee(key)
        - GetAllEmployees(condition)
            - Condition could be as follows
                - DeptName
                    - Returns all Employees by DeptName
                - Location
                    - Returns all Employees of a location
                - Designation
                    - Returns all Employees having a specific designation
                - EmpName
                    - Return All Employees having Same EmpName
                - DeptName and Designation
                    - Return all Employees of specifc Department having specific Designation    
         - Wriate a method to Return All Employees Having Max Salary Per Department            


Day 5:

Create a HTML Page that will use XMLHttprequest object for performing AJAX Calls GET /POST/ PUT /DELETE

Peroform following operations on the Product object having following Key

ProductRowId, ProductId, ProductName, Description, Manufacturer, BasePrice

CReate a Proxy object that will Proxy for Product Object for making sure that, the 
ProductId should be passed as string, BasePrice as Number, the ProductName has length less than 30

=====================================================================================================================================================================================

# Node.js

1. Understanding Node.js Fundamentals
    - Architectures
        - Do not need explicit threding logic , but if the request need an async exdecution the Node.js will execute the code in different thread by managing threading internally and hence the code becomes easy to maintain and manage.
        - Actually Node.js runtime has 'only-one' thraed for all concurrent requests. 
    - Node Conding and Execution
    - Installing the Node.js
        - https://www.nodejs.org
            - node command prompt
            - npm for installing packages
        - Node.js intellisense
            - @types/node
                - This package contains all node.js type definitions for intellisense     
2. Using Node.js Standard Modules
    - JavaScript Code File is executed inside the Node.js Environment using
        - node <File-NAME>.js
    - Concept of Modules
        - The Node.js Hosting Env. will load the Code
            - internal/modules/cjs/loader.js
                - Internall uses File System (fs) module to load the file  in the Env.
                - Each Source Code File is accepted as a Module for Execution  
        - The Code will be verified
            - For Checking the Syntax Error 
        - The Node.js Runtime will monitor the code for execution
            - IO Blocking, Async Code
            - Non-IO Blocking, Sync code
        - Execute the code and generate result on server    
        - To re-load the update module in the Node.js env. using 'nodemon' package
            - Node Monitor that will monitor the File Changes and if the file is change, it will be refreshed in the Node.js runtime
                - npm install -g nodemon  
    - Standard Modules
        - http
            - The Build the Web Server using Node.js
            - The 'http' module
                - help to create Http Server using 'createServer()' method
                    - accepts HttpRequestListener
                        - Http Request
                            - url
                            - method
                            - data
                        - Http Response
                            - write(), write response
                            - writeHead()
                            - end()
                - the createSrever() method provides the object that has the 'listen()' method tom listen requests on specific port                     
        - fs
        - path
    - Creating Custom Modules
3. Web Application Development using Node.js
    - Static and Dynamic Files
    - Express.js
    - Creating Web App using Express.js
    - REST APIs using Express.js
    - Session Management
    - Indentity Management
        - Authentication
        - Token based security
4.  Using Object Relational Mapping (ORM) using Node.js and Sequlize
    - Database Access
    - Performing CRUD Operations
    - Generating JavaScript Models from Database Tables
    - MySQL Stored Procs      
5. Accessing External REST APIs in Node.js Apps
    - Server Side Promise Libraries
6. Accessing NoSQL DynamoDB in Node.js REST APIs



Day 7: Node.js

1. Create a HTTP Srever, that will respond the Products Information as
ProductId, ProductName, CategoryName, Price
2. The HTTP Server must have capacility to create ba new record in Products and return the newly created record. Generate ProductId as AUTO_GENERATED key on HTTP Server.
3. Accept the data for search from the client (POSTMAN / Advanced REST CLIENT (ARC)) and return the Products info  based on search criteria. (pass this criteria either through Body else thriugh header)
