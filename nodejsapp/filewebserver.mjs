import * as http from 'http';
import * as fs from 'fs';


// 1. create a server using http module
let server = http.createServer((req,resp)=>{
    if(req.url === '/home'){
        fs.readFile('./views/home.html', (error,file)=>{
            if(error){
                // file not found or may be error message
               resp.writeHead(404, {'Content-Type': 'text/html'});
               resp.write(error.message);
               resp.end();
            } 
            // respond the HTML file 
            resp.writeHead(200, {'Content-Type': 'text/html'});
            // the HTML contents of teh file will read and written in response
            resp.write(file); 
            resp.end();
        });
    }
    if(req.url === '/about'){
        fs.readFile('./views/about.html', (error,file)=>{
            if(error){
                // file not found or may be error message
               resp.writeHead(404, {'Content-Type': 'text/html'});
               resp.write(error.message);
               resp.end();
            } 
            // respond the HTML file 
            resp.writeHead(200, {'Content-Type': 'text/html'});
            // the HTML contents of teh file will read and written in response
            resp.write(file); 
            resp.end();
        });
    }


    
});

// 2. start listening on the port
server.listen(9087);
console.log('The Server is listening on pport 9087');







