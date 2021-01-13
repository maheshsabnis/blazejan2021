
 let client = require('./getexternaldata');


// 1. define the server infromation for Azure Hosted REST API

let serverOptions = {
    host: 'apiapptrainingnewapp.azurewebsites.net',
    path:'/api/Products',
    method: 'GET' // POST //PUT //DELETE
};

// if connecting the External API on localhost 

let serverOptionsLocal = {
    host: 'localhost',
    path:'/api/Products',
    method: 'GET', // POST //PUT //DELETE
    port: 9087
};

// call the method from module
// initiate ann Async operations
client.getData(serverOptions)
        .then((receivedData)=>{
            console.log(JSON.stringify(receivedData));
        })
        .catch((error)=>{
            console.log(`Error Occured ${error}`);
        });

// further logic here         