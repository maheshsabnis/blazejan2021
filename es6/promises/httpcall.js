// function getProducts(){
//     let products =[];
//     let xhr = new XMLHttpRequest();

//     // subscribe to the responses for success and failure
//     // success
//     xhr.onload = function(){
//         // check for Http Status as 200
//         if(xhr.status== 200) {
//             products = xhr.response;
//             console.log(`In onload ${products}`);
//         }
//     };

//     // failure
//     xhr.onerror = function(){
//         console.log('Error Occured');
//     };

//     // initiate the request
//     xhr.open("GET", "https://apiapptrainingnewapp.azurewebsites.net/api/Products");
//     // send the request
//     xhr.send();
//     return products;
// }
// // client code
// let response = getProducts();
// console.log(`Received Response ${response}`);




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

// subascribe to the Promise object and either get Resolve or rejected

getProducts().then((response)=>{
    console.log(`Received Response ${response}`);
}).catch((error)=>{
    console.log(`Received Error ${error}`);

});


