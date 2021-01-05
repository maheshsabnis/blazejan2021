// function getData() {
//     let products = [];
//     let xhr = new XMLHttpRequest();
//     xhr.onload = function() {
//         if (xhr.status == 200) {
//             products = xhr.response;
//             console.log(`In Method ${products}`);
//         }
//     };
//     xhr.onerror = function() {
//         console.log('Error Occured');
//     }
//     xhr.open('GET', 'https://apiapptrainingnewapp.azurewebsites.net/api/Products');
//     xhr.send();
//     return products;
// }

function getData() {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.onload = function() {
            if (xhr.status == 200) {
                console.log(`In Method ${xhr.response}`);
                resolve(xhr.response);
            } else {
                reject('Same Error Occured');
            }
        };
        xhr.onerror = function() {
            reject('Error Occured');
        }
        xhr.open('GET', 'https://apiapptrainingnewapp.azurewebsites.net/api/Products');
        xhr.send();
    });

}
printResult();
async function printResult() {
    console.log('Methods Start');
    let res = await getData();
    console.log(`After awaitable call ${res}`);
    console.log('Methods Method End');
}