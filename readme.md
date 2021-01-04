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
5. Iterations
6. Conditions
7. Collections
8. Evets
