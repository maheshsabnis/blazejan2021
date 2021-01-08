let p  =new Promise((resolve, reject)=>{
    let result = 0;
    // function in javascript to perform operations 
    // afer the waiting period of some time
    // wait for 5 seconds
    setTimeout(()=>{
        result = 100 + 300; // performing some operation
        if(result == 400) {
            resolve(`Operation is Resolved with result =${result}`); // successful execution
        } else {
            reject(`Operation is Rejected with result = ${result}`);
        }
    }, 5000);
});


let p1= new Promise((resolve,reject)=>{
    resolve(()=>{
        let arr = ["Mahesh", "Tejas", "Ram", "Ramesh", "Shankar", "Vivek", "Mukesh", "Satish", "Abhay", "Nandu", "Jaywant",
        "Mahesh", "Tejas", "Ram", "Ramesh", "Shankar", "Vivek", "Mukesh", "Satish", "Abhay", "Nandu", "Jaywant",
        "Mahesh", "Tejas", "Ram", "Ramesh", "Shankar", "Vivek", "Mukesh", "Satish", "Abhay", "Nandu", "Jaywant",
        "Mahesh", "Tejas", "Ram", "Ramesh", "Shankar", "Vivek", "Mukesh", "Satish", "Abhay", "Nandu", "Jaywant",
        "Mahesh", "Tejas", "Ram", "Ramesh", "Shankar", "Vivek", "Mukesh", "Satish", "Abhay", "Nandu", "Jaywant",
        "Mahesh", "Tejas", "Ram", "Ramesh", "Shankar", "Vivek", "Mukesh", "Satish", "Abhay", "Nandu", "Jaywant",
        "Mahesh", "Tejas", "Ram", "Ramesh", "Shankar", "Vivek", "Mukesh", "Satish", "Abhay", "Nandu", "Jaywant",
        "Mahesh", "Tejas", "Ram", "Ramesh", "Shankar", "Vivek", "Mukesh", "Satish", "Abhay", "Nandu", "Jaywant"];
        arr.map((n,i)=> {
            console.log(n.toUpperCase());
            console.log(n.toLowerCase());
        });
    });
});

// subscribe to the promise
// Resolve --> then()
// Reject --> catch()
p.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});

for(let i=0; i<100;i++){
    console.log(i);
}


// processing multiple promises
let multiplePromises = Promise.all([
    p,p1
]);

// subscribe to all promises at a time
multiplePromises.then((res)=>{
    console.log(`p is resolved ${res[0]}`);
    console.log(`p1 is resolved ${res[1]}`);
}).catch((error)=>{
    console.log(error);
});