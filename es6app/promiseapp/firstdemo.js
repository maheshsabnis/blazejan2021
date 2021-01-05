// resolve --> Success aka fulfilled
// reject --> Fail aks failed
var p = new Promise((resolve, reject) => {
    let res = 0; // operation
    setTimeout(() => {
        res = 1 + 1;
        if (res == 2) {
            resolve(`Resolve ${res}`);
        } else {
            reject(`Rejected ${res}`);
        }
    }, 3000);
});


var p1 = new Promise((resolve, reject) => {
    resolve(() => {
        for (let i = 0; i < 100; i++) {
            console.log('Resolved');
        }
    })
});

p.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});

let pFinal = Promise.all([
    p, p1
]);
pFinal.then((r) => { console.log(r) }).catch((err) => { console.log(err) });