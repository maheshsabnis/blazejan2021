function ajaxPost(url, data) {
    return new Promise(function(resolve, reject) {
        let req = new XMLHttpRequest();
        //req.open("GET", url);
        req.onload = function() {
            if (req.status === 201) { // req.statesText === 'created'
                resolve(req.response);
            } else {
                reject(new Error(req.statusText));
            }
        };
        req.onerror = function() {
            reject(new Error("Network error"));
        };
        req.open('POST', url); //req.open('PUT', url/id);
        // the request header aka MIME Type
        req.setRequestHeader("Content-Type", "application/json");
        req.send(JSON.stringify(data));
    });
}

var product = {
    ProductId: 'Prd0045',
    ProductName: 'Router',
    CategoryName: 'Electronics',
    Manufacturer: 'IBM',
    Description: '100GB/PS',
    BasePrice: 100
};

ajaxPost('https://apiapptrainingnewapp.azurewebsites.net/api/Products', product)
    .then(JSON.parse)
    .then((data) => { console.log(JSON.stringify(data)); })
    .catch(function(error) { console.log(error) });