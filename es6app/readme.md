transpiler, babel

# =============================================================================

Application Configuration for ES 6

1. Install Transpiler Features
2. The 'npm' utility
   1. Create a package.json
      1. The command to create package.json
         1. npm init -y OR
         2. npm init
            1. Provide Command Line Wizard to create package.json file
      2. The Node.js Application configuration file
         1. dependencies : => list of Runtime Dependencies packages
            1. npm install --save <PACKAGE-NAME>
         2. devDependencies : => list of Dev. time dependencies
            1. npm install --save-dev <PACKAGE-NAME>
         3. scripts : => contains commands to
            1. build, test, start (aka run) the application
3. Getting Transpiler
   1. npm install -g @babel/core --> global scope
   2. npm install --save-dev @babel/core --> in the scope of current applciation
   3. npm install -g @babel/cli
   4. npm install --save-dev @babel/cli
   5. @babel/preset-env
      1. Install and configure the 'ES 6 Preset' for transpilation using .babelrc file (?)
         1. .babelrc is babel resource configuration file that contains configurations for transpilation

# ============================================================================

ES 6 Features

1. variable scope
   1. function and block-scope
      1. let keyword
   2. Types
      1. String
      2. Number
      3. Boolean
      4. Object
   3. Enum
2. Arrow Operator
3. template string
   1. Provides a mutable string object using syntax as follows
      1. `${string object}`
4. constant
   1. The 'const' keyword, that will prevent the value to be changed.
   2. Value must be initialize for const declaration
5. Array Type
   1. In ES 6, the Array<T> class
      1. uses ES properties and methods (e.g. length, push, pop, splice, indexOf, slice, etc).
      2. ES 6 Array methods
         1. filter() / find()
         2. sort() / reverse()
         3. replace()
         4. forEach() / map()
            1. forEach() -> uses iterators (?)
            2. map() --> Like Dictionary, each element in array as independent array object
6. Collections
   1. Set
      1. Unique value store
   2. Map
      1. Dictionary
7. rest parameter
8. iterator
   1. using for..of loop
      1. iterates over each element of array and returns it
      2. Interanlly its is manages using Symbol.iterator()
9. object oriented programming
   1. class
      1. ctor --> constructor()
   2. public
      1. the declaration of data memebres prefixed using 'this'
      2. Default access specifer is 'public' for methods
   3. statement functions using arrow operator (pure es6+ syntax for methods in class)
      1. <name>=(<parameters>) => {implementation}
   4. properties
      1. get and set
   5. No overloading
   6. inheritance
      1. using 'extends' keyword
   7. interface
      1. using 'implements'
10. modules
    1. Mechanism of Dividing the Front-End Logic into separate .js files
    2. Manage the linking between code-blocks in these files using 'export' and 'import' objects
    3. Need of Module-Loaders
       1. CommonJS
       2. SystemJS --> ES 6 for Angular Apps
       3. WebPack.js --> ES 6+ for Angular/React/Vue and any other ES 6 modules
11. promises
    1. The 'Promise()' object
       1. successful execution using 'then()'
       2. filed execution using 'catch()'
    2. async and await
       1. async --> a method modifier that represents that the method will be executed asynchronously because one or more statements in this method have an async execution
       2. await, the statement modifier that indicates that, the statement will be executed asynchronously.
12. Proxy
13. Generators (Server-Side)
14. Symbol

# ===========================================================================

Transpilation

ES6 .js file --> babel --> ES5/ES5 .js file for browser

Transpilation Command Line Syntax
babel <SOURCE-FILE> -o <TARGET-FILE>

# ===================================================================================================

Testing

1. Unit Testing Library

   1. Jasmine
      1. BDD Approach of Testing
      2. Assert object
         1. Check and Verify the result from the code after code is executed
      3. Steps
         1. Arrange
            1. Organize the required dependencies for the code to execute
               1. Instances, variable, hard-coded data
               2. Expected Result
         2. Act
            1. Perform Operations
               1. Call the code and execute it using the test
               2. Actual Result
         3. Assert
            1. Verify the Expected with Actual
      4. Test Suit Description
         1. describe() object
            1. Set an Environment befote Test Case Execute and aftre the test case execute
         2. it() object
            1. The Actual Test Case Implementation
      5. UI testing
         1. Spy-On the UI Elements

   Jamsime + Mocha + Chai + Enzyme + Jest + Karma
