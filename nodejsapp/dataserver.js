let http = require('http');

let Emps = [{
    EmpNo:101,EmName:'A'
},{
    EmpNo:102,EmName:'B'
},{
    EmpNo:103,EmName:'C'
}];
// request: the object that will contain the data send by the client to server
let server =  http.createServer((req,resp)=>{


    let headers = req.headers;
    // read the authorization values send by the client
    let authObject = headers.authorization;
    console.log(authObject);

    // print the current request method (GET /POST /PUT /DELETE)
    // return GET for Get request (from browser)
    console.log(`Current Method = ${req.method}`);

    // the 'req' object has the method of name 'on()'
    // this method can be used to read the posted data
    // the on() method accepts the first parameter as event 
    // that will be reaised on the server to process the received data
    // on(event: "close", listener: () => void): this;
    // on(event: "data", listener: (chunk: any) => void): this;
    // on(event: "end", listener: () => void): this;
    // on(event: "error", listener: (err: Error) => void): this;
    // on(event: "pause", listener: () => void): this;
    // on(event: "readable", listener: () => void): this;
    // on(event: "resume", listener: () => void): this;


    if(req.method === "POST"){
        let receivedData;
        req.on('data', (d)=> {
            // process the data
            // with you logic`
            console.log(`Received data from post ${d}`);
            receivedData = d;
        }).on('end',()=>{
            // data processing is done
            // and request is ended 
            Emps.push(receivedData);
            resp.end(`Hay Client I received data as ${Emps}`);   
        });
    }


    // read the Url parameter send by the client
    // http://localhost:9087/101 <-- browser other than chrome
    // http://localhost:9087/favicon.ico <-- browser  chrome

   // console.log(req.url.split('/'));
    // use split to read the first record from srray geerated by split
    let id = req.url.split('/')[1];
       // defining the response header
    // sending data in the JSON format


   

    resp.writeHead(200,{'Content-Type': 'application/json'});
    if(id !== 'favicon.ico' && id!== ''){
        // filter Employees based on id
        let output = Emps.filter((e,i)=>{
            return e.EmpNo == parseInt(id);
        });
        
        resp.write(JSON.stringify(output));
    } else {
        resp.write(JSON.stringify(Emps));
    }
 
   
    // {\"EmpNo\": "\101"\}
   // resp.end();
});

server.listen(9087);
console.log('Started on port 9087');