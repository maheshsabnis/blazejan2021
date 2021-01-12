// loading the module
// verify that is the app contains http.js file
// if found that file is loaded as module
// if not found then will check if the the module is present in the
// standard Node.js hosting runtime
// if found the module will be loaded and will be cached for the current app
// the Singleton object creation for the Node Module
// The module will be cached till it is not changed / modified
let http = require('http');

// 1. create a web server
let server = http.createServer((request,response)=>{
    response.write('Hello World From Node.js!');
    response.end();
});

// 2. start listing on the port
server.listen(9087);


console.log(`The Simple Web Server Started listening on port 9087`);
 