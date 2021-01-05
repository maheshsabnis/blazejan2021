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

