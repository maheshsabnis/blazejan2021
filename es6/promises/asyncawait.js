function getProducts(){

    return new Promise((resolve,reject)=> {
        let xhr = new XMLHttpRequest();
    
        // subscribe to the responses for success and failure
        // success
        xhr.onload = function(){
            // check for Http Status as 200
            if(xhr.status== 200) {
                console.log(`In onload ${xhr.response}`);
                // resolve and notify the response to client / subscriber
                resolve(xhr.response); 
            } else {
                // reject if there is different status code
                reject('Some Error Occured with the status code');
            }
        };
    
        // failure
        xhr.onerror = function(){
             // reject if there is different status code
             reject('Some Error Occured with Http Communication');
        };
    
        // initiate the request
        xhr.open("GET", "https://apiapptrainingnewapp.azurewebsites.net/api/Products");
        // send the request
        xhr.send();

    });
}

// a caller method that call getProducts(), the method that returns promise
// the 'async' keyword indicates that the 'callMethod()' method is calling 
// some method that return promise object

// the 'await' keyword, make sure that the promise resolved 
// and response from promise is received

// IMPORTANT POINTS: if the method is decorated with 'async', it must have atleast one 'await' call
// await keyword must required method to be decorated with 'async'
async function callMethod(){
    console.log('callMethod is executing....');
    let res = await getProducts();
    console.log(`Received Response from awaittable class ${res}`);
    console.log('callMethod is executed....');
}

// client code
// need to not to subscribe to promises
callMethod();
 