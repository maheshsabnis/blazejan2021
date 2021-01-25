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
            - read / write Synchornous and Asynchronus methods
                - If the File Must be Responded to the request then use Sync read
                - If the File contents are written completed before processing the file the use Sync write
                - If large file is processed and the code cannot block itself from performing other operations the use Async Read / Write
        - path
    - Creating Custom Modules
        - A module is a set of re-usable functionalities
        - Autonomous behavior having its logic to support other parts of the Node.js application
            - Data Access, code for Database Operations
            - Security, used to intercept HTTP requests and verify
                - Authentication or Identity
                - Json Web Tokens (JWT)
            - Business Logic Workflow Modules
                - Autonomous modules
                    - Search Logic
                    - Create New  / Update Existing Records
                    - Domain Calculations    
            - Web Application Module
                - Accept HTTP Requests and Return HTML Pages / JavaScript / CSS
                - Single Page / Multi-Page / Hybrid Application        
            - REST APIs
                - HTTP Endpoints
                - Accepst HTTP GET/ POST/ PUT/ DELETE Requests
                - JSON Data Communicaiton     
        - Node.js Module Loader that is used to load and cache the custom modules
            - ES 3 to ES 5
                - file1.js with code, file1.js is Node.js Module
                    -  module.export ={ ... functions...to..be..exported }; 
                - Loading file1.js module in file2.js
                    - let mymodule = required('file1.js');    
            - ES 6+
                - file.js
                    - export class MyClass{.....}
                - file2.js 
                    - import {MyClass} from 'file1.js'         

3. Web Application Development using Node.js
    - Static and Dynamic Files
    - Express.js
        - Install Express 
            - npm install --save express
                - The express() object
                    - the 'use()' method to configure middlewares
                        - express.Router()
                            - Middleware for Routing Management
                                - get() / post() / put() / delete()
                    - the 'listen()' method to expose the Endpoint fot HTTP Communication
        - Creating Web App using Express.js
            - Using the Static pages
                - HTML files
                - CSS files
                - JavaScript JavaScript   
            - Use express routing for Web Application Development     
        - REST APIs using Express.js
            - Data Services those are used to expose data to client apps using JSON (Default) / XML / Binary
                - Browser App (app designed using JavaScript Libraries  / Frameworks)
                - Mobile Apps (Androis, iOS, etc.)
                - Desktop apps (.NET / JAVA / C++, etc)
                - Any other Thitrd Party client/vendor/partner apps
            - Http Methods
                - get() / post() / put() / delete()
            - For REST API use following middlewares
                - body-parser
                    - use the data from HTTP Request body for POST and PUT Requests
                - cors()
                    - CROSS-ORIGIN-RESOURCE-SHARING (CORS)
        - npm install --save express body-parser cors atob                   
        - Session Management
        - Indentity Management
            - Authentication
            - Token based security
4.  Using Object Relational Mapping (ORM) using Node.js and Sequlize
    - Database Access
    - Performing CRUD Operations
    - Generating JavaScript Models from Database Tables
    - MySQL Stored Procs      
    - Sequelize Package 
        - Promise-based the Node.js ORM
            - MySQL, MS-SQL, Postgres, MariaDB, SQLite
        - For MySQL, use mysql2 package
        - The Command Line Tools for Database-First and Code-First Approach
            - sequqlize_auto 
                - CLI to generate JavaScript Objects those of mapped to the Database Table
            - sequelize_cli
                - Used for Code-First Approach
        - Sequelize Objects
            - Sequelize
                - Used to define Database Connection Metadata
                - Contains Methods for performing CRUD operations
                - The query() method is used to execute operations Asynchronously
                    - Queries (SQL Statements and DML) 
                    - Stored Procs                
            - DataType
                - Provide Typed Mapping from Node.js to the Database Columns
                    - Uses this for Mapping JavaSCript Object to the Table Columns w.r.t. Data Types
            - Model
                - Class, that act as a base class fro defining JavaScript class that will be ised to generate the Database table with Code-First Approach
        - Using Database First Approach
            - Install sequelize, sequelize-auto  and mysql2 in global scope
            - npm install -g sequelize sequelize-auto mysql2   
                - This will enable the Node.js to run the command line tool to generate JavaScript Objects from MySQL database          
            - Install these packages local to the application so that the app uses sequelize orm
                -  npm install --save sequelize sequelize-auto mysql2     
            - run the following commans to generate JavaScript objects from database          
                - sequelize-auto -h localhost -d Company -u root -x P@ssw0rd_ --dialect mysql -t Department,Employee

                    - -h, the name/ IP of the hosting server having database instance running
                    - -d, the name of the database
                    - -u, the database instance user name (aka admin) 
                    - -x, the password
                    - --dialect, the database provider mysql, mssql, etc.
                    - -t, commna seperated list of tables from which JavaScript Objects will be generated
                - After successful execution of this command the 'models' folder will be generated with JavaScript objects in it.     



5. Accessing External REST APIs in Node.js Apps
    - Server Side Promise Libraries
6. Accessing NoSQL DynamoDB in Node.js REST APIs
7. Node.js Promise Object-Model
    - The 'q' the Promise Library
    - The 'Bluebird', the Promise Library
    - Installing q
        - npm install --save q
   https://www.dotnetcurry.com/nodejs/1242/promises-nodejs-using-q-goodbye-callbacks
   https://www.dotnetcurry.com/nodejs/1225/call-external-service-using-nodejs     



- Query String
http://server/myapp/resource.html?name1=value1&name2=value2&name3=value3....
- part in URL after the 'first ?' is query string
    - name1=value1&name2=value2&name3=value3
    - server loads the query string parser
        - read each name=value pair seperated by &
        - obj1 = name1=value1 
        - obj2 = name2=value2
        - obj3 = name3=value3



# React.js For Front-End-Programming

The Library for UI.
1. Creating a React.js Project
    - Use the React Command Line Interface (CLI) for creating React Project
    - npm install -g create-react-app / sudo npm install -g create-react-app
        - Provide a facility to generate
            - React Application
            - Manage Default Dependencies for React App
            - Managing React Build
            - Managing React Test
            - Host React App and Deliver the app to Browser
        - react-scripts
            - Package for React CLI    
            - Uses internally
                - WebPack
                    - The Module Bundler (create a bundle of all npm package) and build it
                    - Standard React Packages
                        - react
                            - Contains React.js Object Model
                        - react-dom
                            - Contains the object model for DOM Generation and Rendering
        - Generate the React Project
            - create-react-app  <NAME-OF-THE-APPLICATION>
    - Create a React Application from Scratch
        - Install WebPack
        - COnfigure Web Pack
        - COnfigure and install all dependencies

# React.js object Model

The 'react' package
- The 'React' Module
    - Contains all Classes for the React.js App
        - The 'Component<P,S>' class
            - The base class for creating React-Component for UI Creation 
            - Contains Two-Generic Properties as follows
                - P, the 'props' object, this is the collection of properties to share data from Parent Component to Child Component.
                    - The 'props' is scopped across all components in the react application i.e. the 'immutable' object
                    - Dynamic object that can be added with runtime dynamic properties to share data across components
                - S, the 'state' property. This is a local state (data) of the component
                    - The 'state' object live only inside the component        
            - The constructor(props){}
                - This is used to call the based class constructor (Component's class)
                - This is used to define local state properties for the component
                    - this.state = {  list of properties };         
            -  the 'render()' method
                - this is used to generate the DOM based on HTML abstracted in the component and the state,props and events        
                    - state,props will be used to show data and accept data from end-user from HTML elements
                    - these propertes will be sed to generater HTML elements
                    - Events for HTML elements will be used to set the behavior of Component
            - Contains lifecycle method
                - These methods manages the various stages of component rendering and Data updates
                    - Init (state, props), update, mount, unmount, etc.
            - Logic Method for events        
    - React 16.0+ , Component can be created using
        - React's OWN Traditional Class Component, the ES 6 class derived from 'Component' base class
        - React 16.0+ Functional Component, the JavaScript funciton that returns HTML             
- The React module from  'react' package uses 'react-dom' package contains ReactDOM module
- The ReactDOM contains
    - The JSX parser, Xml Syntax Extensoin for JavaScript in React.js
        - The Start tag must have end tag
            - e.g. <input/>, must be closed, else JSX will geerate Compiler Error           
        - JXS Attribute System, the new attributes for HTML UI elements, jsut like HTML elements
            - name
            - className, instead of class       
            - htmlfor, instaed of for
            - value
            - Events Attributes
                - onClick, onChange, keyUp, mouseEnter, mouseLeave, etc.
    - ReactDOM.render()
        - This accepts the Component as input parameter and 'mount' aka (render and load) the component on HTML page and shown in browser.
            - This executes the LifeCycle methods of the Component so that is can be effective in browser      
    - Monitor any state updates of the components and based on that it will re-render part of the component aka Virtual DOM      

1. Creating Components
    - The name of the component must starts from Ueercase character
        - Must use 'PasCal' case 

```` JavaScript

// 1. import React Object Model and the Component

import React, {Component} from 'react';

// 2. create a component class

class FirstComponent extends Component {

    // 2.a. the render method that contaains the HTML UI
    // to be rendered
    // it can have only-one top level element
    render(){
        return(
            <div>
                <h2>The First React Component</h2>
            </div>
        )
    }
}
// 3. exporting the component so that
// it can be impprted for either reusability in other component or mounting
export default FirstComponent;

````

The index.js code

```` javascript

 import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import the component to be mounted
import FirstComponent from './components/firstComponent';

import reportWebVitals from './reportWebVitals';

let message = 'Hi Component you are being mounted';

// Mount the App component on the HTML element having 'id' as 'root'
// msg is the custom JSX attribute that will be generated by React.js JSX parser
// at runtime and the property 'message' will be passed to <FirstComponent/>
ReactDOM.render(
  <React.StrictMode>
    <FirstComponent  msg={message}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

````

Passing the props to child component

```` javascript
// 1. import React Object Model and the Component

import React, {Component} from 'react';

// 2. create a component class

class FirstComponent extends Component {

    // 2.a. adding the constructor for receivind props

    constructor(props){
        super(props);
    }


    // 2.b. the render method that contaains the HTML UI
    // to be rendered
    // it can have only-one top level element
    // the render() method using props
    render(){
        return(
            <div>
                <h2>The First React Component!!!!!! {this.props.msg} </h2>
            </div>
        )
    }
}
// 3. exporting the component so that
// it can be impprted for either reusability in other component or mounting
export default FirstComponent;

````
2. Parent Child Relationship
Using Props across Tow Components in same file

```` javascript
import React, { Component } from 'react';
class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() { 
        return (  
            <div>
                <h2>The Parent Component</h2>
                <ChildComponent message="Hi Child Component"></ChildComponent>
                <br/>
                <Child1Component message="Hi Child 1 Component"></Child1Component>
            </div>
        );
    }
}

class ChildComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() { 
        return (  
            <div>
                <h2>The Child Component</h2>
                <strong>
                  Value Received from Parent : {this.props.message}
                </strong>
            </div>
        );
    }
}

class Child1Component extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() { 
        return (  
            <div>
                <h2>The Child Component</h2>
                <strong>
                  Value Received from Parent : {this.props.message}
                </strong>
            </div>
        );
    }
}
 

 
export default ParentComponent;

````







2.a. The State Binding with the UI Elements
    -  UniDirectional Data Flow
        - Data is Accepted by End-User and updated in state properties using JSX attributes
            - using 'value' attribute for input text/radio/check and select elements
            - <input type="text" value={this.state.<STATE-PROPERTRTY>}>  
    - Warning after binding
        Warning: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.
    - To update the state property define the 'onChange' event binding and update the 'state' property using 'setState()' method in side the event method.      
        - this.setState({<STATE-PROPERTY-NAME>: <VALUE>},()=>{CALL-BACK-FUNCTION})  

Simple State Updates

```` javascript
import React, { Component } from 'react'

class StateComponent extends Component {
    constructor(props) {
        super(props);
        // declaring the local state properties 
        this.state = { 
            firstName: '',
            middleName: '',
            lastName: ''
        };
    }

    // evt is the element on which an event is raised
    // evt.target is the element reference
    // evt.target.value, the value of the target element
    // setState() a method that will be used tp update the state
    // property with new value
    handleFirstNamChange=(evt)=>{
        this.setState({firstName:evt.target.value});
    }
    handleMiddleNamChange=(evt)=>{
        this.setState({middleName:evt.target.value});
    }
    handleLastNamChange=(evt)=>{
        this.setState({lastName:evt.target.value});
    }

    // {this.handleFirstNamChange.bind(this)}, bind the method to UI element

    render() { 
        return (  
            <div>
              <h2>The Local State for the Component</h2>
              <div>
                <label>First Name</label>
                <input type="text" value={this.state.firstName}
                 onChange={this.handleFirstNamChange.bind(this)}/>
              </div>
              <div>
                <label>Middle Name</label>
                <input type="text" value={this.state.middleName}
                onChange={this.handleMiddleNamChange.bind(this)}/>
              </div>
              <div>
                <label>Last Name</label>
                <input type="text" value={this.state.lastName}
                onChange={this.handleLastNamChange.bind(this)}/>
              </div>
              <div>
                 <input type="button" value="Clear"/>
                 <input type="button" value="Save"/>
              </div>
              <hr/>
              {/* Printing values entered by end-user in the UI */}
              {`${this.state.firstName} ${this.state.middleName} ${this.state.lastName}`}
            </div>
        );
    }
}
 
export default StateComponent;
````

Using a Siggle method and binding it to all input elements for listening changes and updating the individual state properties
    - Set the 'name' attribute of the UI element of whihc value to be read same as the 'state' property of value to be updated from the element

```` javascript
import React, { Component } from 'react'

class StateComponent extends Component {
    constructor(props) {
        super(props);
        // declaring the local state properties 
        this.state = { 
            firstName: '',
            middleName: '',
            lastName: '',
            fullName: ''
        };
    }

    
   
    handleChangeForAllInputs=(evt)=>{
        // evt.target.name, read the name of the element being
        // updated with event and read the value and update it in state property.
        // evt.target.name, represent the name of the 'state' property 
        this.setState({[evt.target.name]: evt.target.value});
    }


    clear=()=>{
        this.setState({firstName: ''});
        this.setState({middleName: ''});
        this.setState({lastName: ''});
    }

    save=()=>{
        this.setState({fullName: `${this.state.firstName} ${this.state.middleName} ${this.state.lastName}`});
    }
    // {this.handleFirstNamChange.bind(this)}, bind the method to UI element

    render() { 
        return (  
            <div>
              <h2>The Local State for the Component</h2>
              <div>
                <label>First Name</label>
                <input type="text" value={this.state.firstName}
                name="firstName"
                 onChange={this.handleChangeForAllInputs.bind(this)}/>
              </div>
              <div>
                <label>Middle Name</label>
                <input type="text" value={this.state.middleName}
                name="middleName"
                onChange={this.handleChangeForAllInputs.bind(this)}/>
              </div>
              <div>
                <label>Last Name</label>
                <input type="text" value={this.state.lastName}
                name="lastName"
                onChange={this.handleChangeForAllInputs.bind(this)}/>
              </div>
              <div>
                 <input type="button" value="Clear"
                  onClick={this.clear.bind(this)}/>
                 <input type="button" value="Save"
                  onClick={this.save.bind(this)}/>
              </div>
              <hr/>
              {/* Printing values entered by end-user in the UI */}
              {`${this.state.firstName} ${this.state.middleName} ${this.state.lastName}`}
              <hr/>
               <div>
                <strong>{this.state.fullName}</strong>
               </div>
            </div>
        );
    }
}
 
export default StateComponent;
````
 
constant.js

```` javascript
export const Departments=['IT', 'HRD', 'TRAINING', 'SALES'];
export const Designations =['Manager', 'Lead', 'Engineer', 'Trainer', 'Executive', 'Sr.Manager'];
````

logic.js

```` javascript
export class Logic {
    constructor(){
        this.employees=[];
    }

    getEmployees(){
        this.employees.push(
            {EmpNo:101, EmpName: 'Akash', DeptName: 'IT', Designation: 'Manager', Salary:10000},
            {EmpNo:102, EmpName: 'Mukesh', DeptName: 'HRD', Designation: 'Lead', Salary:12000},
            {EmpNo:103, EmpName: 'Abhay', DeptName: 'SALES', Designation: 'Manager', Salary:30000},
            {EmpNo:104, EmpName: 'Nandu', DeptName: 'TRAINING', Designation: 'Trainer', Salary:17000}
        );
        return this.employees;
    }

    addEmployee(emp){
        this.employees.push(emp);
        return this.employees;
    }
}

````


```` javascript



import React, { Component } from 'react';
import {Departments, Designations} from './../../models/constants';
import { Logic } from "./../../models/logic";

class EmployeeComponent extends Component {
    /**
     * @param {any} props
     */
    constructor(props) {
        super(props);
        this.state = {  
            EmpNo:0,
            EmpName: '',
            DeptName: '',
            Designation: '',
            Salary:0,
            departments: Departments, // store constant array
            designations: Designations, // store constant array
            employees:[]
        };
        // define an instance of Logic class
        this.logic = new Logic();
        // set the initial value of the state in Constructor thats why the render() method
        // will take the initial value for employees and rendering HTML Table 
        this.state.employees =  this.logic.getEmployees();
    }
    /**
     * @param {{ target: { name: any; value: any; }; }} evt
     */
    handleValueChange=(evt)=> {
        this.setState({[evt.target.name]: evt.target.value});
    };

    clear=()=>{
        this.setState({EmpNo:0});
        this.setState({EmpName:''});
        this.setState({DeptName:''});
        this.setState({Designation:''});
        this.setState({Salary:0});
         
    };

    save=()=>{
        let emp = {
            EmpNo: this.state.EmpNo,
            EmpName: this.state.EmpName,
            DeptName: this.state.DeptName,
            Designation: this.state.Designation,
            Salary: this.state.Salary
        };
        let emps = this.logic.addEmployee(emp);
            // direct state update not allows with new values for state properties
            // use setState()
        // this.state.employees = emps;

        // perform state mutation using setState()
        // since the collection state properties 
        // delays the execution for update, pass the callback parameter 
        // to setState() method so that the the setState() will execute the callback 
        // and during that time the collection will be updated asynchronously
        this.setState({employees: emps},()=>{});


        console.log(`EMployees = ${JSON.stringify(this.state.employees)}`);
    };


    render() { 
        return ( 
            <div className="container">
            <h2>The Employee Infromation</h2>
                <div className="form-group">
                  <label>EmpNo</label>
                  <input type="text" className="form-control"
                  name="EmpNo"
                  value={this.state.EmpNo}
                   onChange={this.handleValueChange.bind(this)}/>
                </div>
                <div className="form-group">
                    <label>EmpName</label>
                    <input type="text" className="form-control"
                    name="EmpName"
                    value={this.state.EmpName}
                     onChange={this.handleValueChange.bind(this)}/>
              </div>
              <div className="form-group">
                <label>DeptName</label>
                <select className="form-control"
                name="DeptName"
                value={this.state.DeptName}
                 onChange={this.handleValueChange.bind(this)}>
                   {
                       /* generate the <option> in DOM Tree based on Collection */
                       this.state.departments.map((dept,index)=>(
                           <option key={index} value={dept}>{dept}</option>
                       ))
                   }
                 </select>
            </div>
            <div className="form-group">
                <label>Designation</label>
                <select className="form-control"
                name="Designation"
                value={this.state.Designation}
                 onChange={this.handleValueChange.bind(this)}>
                 {
                    /* generate the <option> in DOM Tree based on Collection */
                    this.state.designations.map((desig,index)=>(
                        <option key={index} value={desig}>{desig}</option>
                    ))
                }
                 </select>
            </div>
            <div className="form-group">
                    <label>Salarys</label>
                    <input type="text" className="form-control"
                    name="Salary"
                    value={this.state.Salary}
                     onChange={this.handleValueChange.bind(this)}/>
              </div>
              <div className="form-group">
               <input type="button" value="Clear" onClick={this.clear.bind(this)} className="btn btn-warning"/>
               <input type="button" value="Save" onClick={this.save.bind(this)} className="btn btn-success"/>
        </div>
        <hr/>
        <h2>The Employee List</h2>
        <table className="table table-bordered table-striped table-dark">
          <thead>
               <tr>
                <th>EmpNo</th>
                <th>EmpName</th>
                <th>DeptName</th>
                <th>Designation</th>
                <th>Salary</th>
               </tr> 
          </thead>
          <tbody>
            {
                this.state.employees.map((emp,index)=>(
                    <tr key={index}>
                      <td>{emp.EmpNo}</td>
                      <td>{emp.EmpName}</td>
                      <td>{emp.DeptName}</td>
                      <td>{emp.Designation}</td>
                      <td>{emp.Salary}</td>
                    </tr>
                ))
            }
          </tbody>
        </table>
            </div>
         );
    }
}
 
export default EmployeeComponent;
````






3. Reusablity in Components
    - Guidelines for creating the re-usable component
        - Decide the UI
            - Plan for UI elements that will be used to ganarate UI for the component
        - Decide 'props' those are accepted by the component from its parent
            - These props will be used to show data in reusable component's UI elements
        - Decide events those will be emitted by child component to its parent component along with data to be emitted        



4. React.js Lifecycle
5. React.js Forms with Validation
    - HTML 5 vValidation Techniques that is used by JSX to validate inputs from the end-user
        - requred, pattern, min, max, minlength, maclength, email
        - HTML 5 = Html Tag + Inline JavaScript + Inline CSS 
6. Service Calls, accessing REST APIs with and without security 
    - ES 6 fetch object
        - Object that returns promise and the client / caller has to subscribe
    - The axios library
        - Promise based
            - Promise().then().catch()
        - get/post/put/delete methods returning the AxiosResponse object
        - Use the Browser's resource for HTTP Communication
            - Chrome, FirefoX, Safari, Opera, Edge, IE11   
                - Latest version -3
        - JS-Front-End Apps (Browser)
            - React, Vue, Ember, ES6 
            - import * as axios from 'axios'   
                - JSObjects in browser must subscribe to the AxiosResponse     
                    - Use 'componentDidMount()' to subscribe to the AxiosResponse and Update the State (and hence the component)
        - Node.js on Server-Side    
            - const axios = require('axios')
                - Node.js Runtime aka internal Thread is responsible to subscribe to AxiosResponse
        - npm install --save axios        
7. React Routing for Single Page Front-End Application
    - React-Router-Dom
        - npm install --save react-router-dom
            - BrowserRouter
                - class used to manage the Routing across React Components
                - uses the React.js Component lifecycle
                - Use the Route Table to read the component's path to load it and render it
                - Router
                    - Used to manage the Routing across componnets inside the Browser
                        - Router.Provider
                            - Used to maintain the state of the Routing History inside the Browser based on Route table
                            - Router-Histoty.Provider
                                - STore all the routing histroy in the BrowserRouter inside the Browser so that the <Link> can be used to move across the routing
                - To read the route parameters in the target component use the following property of BrowserRouter passed through props
                    - this.props.match.params.<PAREMETER-IN-THE-ROUTE-TABLE>
                    - this.props.match.params.id          
                - The Receiving component must subscribe to the route parameters inside the 'componentDidMount' hook       
            - Link
                - The Route Link used to query to the route table 
            - Route
                - Define a route table as below
                    - <Route extact path="<URL-FOR-ROUTE>" component={<COMPONENT>}>

            - Switch
                - Object used to execute the route url query to decide which component is to be loaded from the route table based on the Route Link
            - Redirect
                - Object that is used to defining the default Redirection
                - Protect the route Url navigaction for invalid rourete requests    
8. Higher-Order-Components (HOC), pattern of Rendering Components in JavaScript on Demand
9. ErrorBoundries
    - Error Boundries is an approach of Handling Error in React.js (16.0+) to make sure that is the component (parent to child) is crashing during rendering or during executing any logic then handl and log the error and render the fallabck HTML UI
    - Two Ways of Handling Error 
        - Using Try...catch inside the render() method (available in all react versions)
            - try..catch must be written in render() method od each component
            - not a good idea if the app have several components loaded at a time
        - Create a global boundry component that will act as a parent component for all other components to be rendered
            - this global boundry component will implement componentDidCatch() method and getDerivedStateFromError() property to listen exceptions thrown by any child componenty while rendering.     
            - the render method of this global boundry component will be responsible to rnder the fallback UI when a child component crashes
        - Please note that the iframe must be set to display as none in the application if you are using create-react-app for creating the react application    

# React New Programming Techniques

10. Functional Components
    - It is a  JavaScript Function that returns the HTML UI
        - function MyComponent(){...... return(<HTML/>)};
    - Using Function Expression returing the HTML UI
        - const MyComponent=()=>{ ...... return (<HTML/>)};
    - Functional Expression Component Object, the Expression itself is UI Components, this does not return HTML but its is HTML by itself (Used for ReuSable Components) 
        const MyComponent=()=>(...... <HTML/>);      
    - Use 'props' for data communication across Components
        - function MyComponent(props){..... props.<PROPERTY>}
    - All logical functions are written as constant expressions
        - function MyComponent(){   function logic1(){}; ....  }
        - const MyComponent=()=>{ const logic1=()=>{};  }           
11. React Hooks, state, context, new way of REST Calls
    - useState()

        - Local State of the component
    
            - const [<STATE_PORPERTY>, <CALLBACK_TO_UPDATE_STATE>]= useState(initialValue-of-state-property);
    
                - CALLBACK_TO_UPDATE_STATE, contains the mechanism to update state
                
        - function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction{<S>}>];       
        
            - S is the State Property having  'initialState' value during declaration
                - S can be numbre, string, boolean, date, array, object
            - Dispatch, is a type that is used to detect an event that is raised on HTML element with which the 'S' is bind. 
            - SetStateAction, the call back that will be used to update 'initialState' of S to new State based on the Dispatch event.   
                - This performs operation like 'setSeate()' in Component class  
    - useContext()
        -  Used to pass data (or object with data and callbacks) across components
        -  The Sender Component aka Provider Components decides which component can Consume data from Context`, this component that consume data from Context is called as Consumer Component          
        - Unlike props, the Context is passed to specific components
        - The 'createContext()' method of 'react' is used to define the cotext  
            - const MyContext = createContext(initilValue), initialValue may be null
                - MyContext becomes an instance of React.Context object
                    - Following Object for COntext
                        - MyContext.Provider, will be used by Provider/Sender Component to send value(s)
                            - <MyContext.Provider value={<DATA-TO-BE-PROVIDED>}>
                        - MyContext.Consumer, will be used by Comsumer / Receiver component to consume value(s)
                            - const context = useContext(MyContext);
                                - context, has access to all data that is provided using 'value' property of Provider
        - Using 'useContext()' hooks the data can be comsumed by the consumer 
    - useEffect()
        - Combination of componentDidMount() and componentWillUnMount()
        - Use this for AJAX calls mainly
        - Desubscibe from any events
        - useEffect(()=>{... componentDidMount... return()=>{.... componentWillUnMount Code.....}  }, [dependency-parameter]);
            - ()=>{... componentDidMount...}
                - responseible for State update
                    - call shouldComponent() method will be called
                        - true, HTML of the component will be updated, modify UI using Virtual DOM
                        - false, no UI changes
                -  ()=>{... componentDidMount...}, will continue till either the render() does not stop or the state/props changes are not completed   
            - return()=>{.... componentWillUnMount Code.....}    
                - the logic for component will unmount e.g. clean-up code can be written here
            - [dependency-parameter]
                - this will signal to useEffect() that the state update is completed and rendering() is done, so stop/complete the execution.        
    - IMPORTANT NOTE:
        - The React Hooks can aonly be used at functional component level or inside custom hooks, because of this, the hooks  must have codition or a dependency to complete its execution
            - useState(), it will be exeuted only when the callback is invoked based on events else it will not in executing condition.            
            - useContext(), it will be executed only when the consumer component is subscribing / consuming to the context
            - useEffect(), will be executed till the depednency parameter is not signling about the state change. 
    - useReducer()
        - The concept of Reducer from Redux
    - useRef()
        - UnControlled Component
        - use it instead of 'refs'
    - useMemo()    
        - Memoization
        - The React DOM Caching with state in browser
            - UnProved feature
12. State Management using Redux
    - Application State Management for React App
    - Concepts
        - Store
            - A Global Object that is responsible to contains the Application State (Data for all Components)
            - This object is loaded once with the application and contineously used for data Read/Write  operations
        - Action
            - The Types of Event Dispatched from User Interface (Component)
            - Uses Action Creator
                - The method that accepts the Data from UI and the Action Type and decides what is to be done? e.g. LIST_PRODUCTS, ADD_PRODUCTS, etc.
                - The data accepted by Action Creator is known as Payload
            - The Action creator must return 
                - The OUTPUT ACTION based on Input action dispatched from User Interface
                - The Payload, the data to be updated in Store
                    - The Number, String, JSON Object, Collection, DateTime, Boolean
                - e.g. LIST_PRODUCTS may have output actions as LIST_PRODUCTS_SUCCESS or LIST_PRODUCTS_FAILED 
            - IMPORTANT FOR ACTIONS
                - Action Creator can have only Synchronous Operartions
                - Action Creator many initiate the Async operations e.g. AJAX Calls or PROMISES by using 'THE MIDDLEWARE'     
        - Reducer
            - A 'Pure Function' that accepts initial State in Store and te Action that is dispatched from UI
            - This function is responsible to update teh initial State of the store to new state based on teh payload returning by Action Creator
            - The Redecure will decide how the state is updated.
            - Reducer must not contains complex logic
                - e.g. Long runniung operations e.g, Ajax calls
                - Complex Date Operations
        - Redux
            - npm install --save redux
            - The 'createStore()'
                - Method that creates a 'Store' i.e. the application state object
               
            - The 'combineReducers()' 
                - Method that that will accepts reducers functions and combine them together to manage the store updates         
            - The createStore() method accepts a reducer object returned by combinereducers() to create and monitor store
                - let store =  createStore(reducer);  
        - React-Redux Combine Object Model
            - npm install --save read-redux    
            - The 'Provider' object that is used to load a Parent / Container Component under which all react components are executed
                - Provider contains a 'store' property. This property will be used to load the Application Store 'the store object from redux' for all components so that they can subscribe to it for read/wrtite operations
            - connect() method, used to connect 'actions dispatched' from UI  perform read/write operations on 'store' using 'redecurs'
                - 'mapDispatchToProps', object that reads 'props' of the component and pass these props data to action method to be dispatched so that the store can be updated
                - 'mapStateToProps', object that is used to read the updated state from store and map these updated values from store to 'props' of the component so that component will show data from 'store' on UI     
                - Syntax
                    - connect(mapDispacthToProps, mapStateToProps)(<REACT-COMPONENT-TO-DISPATCH-ACTIONS-AND-TO-BE-UPDATED-FROM-DATA-FROM-STORE>)   
            - react-redux hooks
                - useSelector(STATE)
                    - Subscribe to the Store and Read data from Store to update Component
                - useDispatch()
                    - dispach Action From UI
                - useSelector() and useDispacth() does same thing taht is done by connect() method                       

13. Testing  






Day 7: Node.js

1. Create a HTTP Srever, that will respond the Products Information as
ProductId, ProductName, CategoryName, Price
2. The HTTP Server must have capacility to create ba new record in Products and return the newly created record. Generate ProductId as AUTO_GENERATED key on HTTP Server.
3. Accept the data for search from the client (POSTMAN / Advanced REST CLIENT (ARC)) and return the Products info  based on search criteria. (pass this criteria either through Body else thriugh header)


Day 8: 

Create a Node.js Web Server, that will render the Products.html. This page will have
UI for Accepting the product data, use the <form> tag and submit the form with the Product Information. Once this page is posted, recived the posted data and the data has to be added in the server in Products array.  Display this products array in the table back to the page.

HINT: https://www.dotnetcurry.com/nodejs/1216/using-nodejs-process-post-data

Create a Node.js app that will perform Async operations for Reading / Writing data to external service using 'Q' library 

Day 9: Hands-on-Lab

Create an Express.js Web Application. This application will render HTML pages based on Express Routes. 
Create REST APIs using Express.js that will perform CRUD Operations to the Pertsistable Store in memory
Create an Array of UserName and Password, make sure that the user is able to perform REST API calls based on valid credentials


Day 10: Hands-on-Lab

Create a REST API that will have following operations to be performed using REST Calls

1. Perform CRUD operations on Employee with following
    - verify the column validations in Application Server before sending request to DB using ORM
        - Validate all constraints in the Application Server, e.g. Not Null, FOreign Key, etc.
    - If the validation Failed the return the error response
2. Create a Get Request that will return All Employees in Specific DeptName with structure of response as
    - EmpNo, EmpName, DeptName, Designation, Salary
3. Create a Get Request that will return Tax for each employee as
    - 10% of salary from 1L to 2L
    - 20% of salary from 2L to 5L
    - 30% more that 5L             
    HINT: Create a Stored Proc or write the logic in Application Server in REST APIs

Hads-on Day: 12

Create a GridComponent in React.js using HTML <table> element with the following specifications
    - The Table should accept the DataSource property from parent of the type aray to generate Rows and Columns (mandatory today)
    - Make sure that the the DataSource in not undefined or empty, if it is, then return a message that Grid Cannot be generated to parent (mandatory today)
    - When a row is selected from the GridComponent, the data of the selected row must be passed to the parent component. so that parent componenyt can update it(mandatory today)
    - The GridComponent, can accept the 'canDelete' prop type form parent as boolean. If the 'canDelete' is true, then each row must generate the delete button and whrn this button is clicked, the row must be deleted from the array of the parent component. (mandatory today)
    - The GridComponent can accept isSort boolean prop type and sortKey prop type. If isSort is true, then the daata in the GridComponenty must be sorted in ascending order of the 'sortKey' value
        - if isSort = true and sortKey=ProductName, then the data in GridComponent must be shown in sorted order of the ProductName (mandatory today)
    - GridComponent accept props type to show number of  rows based on rowCount prop type passed from parent. The parent may keep of changing value of the rowCount and based on the rowCount, the GridComponeny should show the records. (optional)       

 
Day 14: Project EWxercise

Creae MySQL-Express-React-Node Application with the following specifications
1. Create Database Compoent with Department and Employee Tables (Already Done)
2. Create REST APIs usign Express + Node for Performing CRUD operations on Department and Employee tables using MySQL + Sequelize (Already Done)
3. Create a React Single Page Application  for perform CRUD Operations by calling REST APIs for Department (Done by Trainer Mahesh Sabnis) and Employee in React application
    - Create HTTP Service usign axios for get/post/put/delete for Employee REST API
    - Create Components for
        - List Employees 
            - Should Have Search Funcationality for Employee Based on DeptName / EmpName / Designation
            - The Employee List should show all employees by default, then it should filter employees based on search
            - Employee List must have Edit and Delete Buttons for Navigating to Edit and Delete Components
        - Create Employee must have validation check with Validation Summary (Use Vaidation Summary Component)
        - Edit component will edit employee with all validations
        - Delete component is just a read-only component that will be used by end-user to see which employee is being deleted
    - Each co0mponent must have link for gping back to List Employee component if end-use does-not want to creae/edit/delete         


Hands-on labb Day 15

Create a Functional Component that will be reponsible for performing the following: (Parent-Component)
1. Will have the TableComponent created for showing data from REST APIs calls for Departments and employees.
    - TableComponent will be used twice in the parent component to show Employees and Departments
    - use 'useEffect' for Ajax calls
    - use 'useContext' to pass Depts and Emps to these two table components
    - use 'useState' for Depts and Emps
2. When a user select a row from a Table showing the Departments, the other table showing the list of employees will show only employess based on the selected DeptName







