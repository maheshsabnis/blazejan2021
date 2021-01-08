function postData(url,data){
    return new Promise((resolve,reject)=>{
        let request  =new XMLHttpRequest();

        request.onload = function(){
            if(request.status == 201){
                resolve(request.response);
            } else {
                reject(new Error(request.statusText));
            }
        };

        request.onerror = function(){
            reject(new Error('May ne Network Error'));
        };


        request.open("POST",url); // PUT  // DELETE
        // define the request header
        request.setRequestHeader("Content-Type", "application/json");
        // pass the data as JSON string
        request.send(JSON.stringify(data));

    });
    
}


let prdData = {
    ProductId: 'Prd998',
    ProductName: 'Pen',
    CategoryName: 'Stationary',
    Manufacturer: 'Renolds',
    Description: 'Gel-Pen',
    BasePrice:40
};

// URL for PUT
// <id>  is a value based on which record will be searched 
// "https://apiapptrainingnewapp.azurewebsites.net/api/Products/<id>"
// PUT Request also acepts data in Body as JSON
//  request.send(JSON.stringify(data));

// URL for DELETE
// <id>  is a value based on which record will be searched and deleted
// "https://apiapptrainingnewapp.azurewebsites.net/api/Products/<id>"

postData("https://apiapptrainingnewapp.azurewebsites.net/api/Products", prdData)
.then((resp)=>{
    console.log(`Data Created ${resp}`);
})
.catch((error)=>{
    console.log(`Data Creation failed ${error}`);
});