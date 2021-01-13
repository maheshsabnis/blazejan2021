let fs = require('fs');

// perform Synchronous Read

try {
let dataFromFile = fs.readFileSync('input.txt', {encoding: 'ascii'});

console.log(`Data from file  = 
${dataFromFile}`);

}catch(e) {
   console.log(e.message); 
}

console.log();
console.log();
// lets read the file asynchronously
fs.readFile('input.txt', {encoding:'ascii'}, (error, data)=>{
    // check for error
    // the error code will immediately executed if error
    // occured at FS module level e.g. file not found
    if(error) {
        console.log(`Error Occured ${error.message}`);
        // stop the execution immediatey so that the thred is closed and controller is passed to caller
        return; 
    }
    console.log(`Data from file read asynchronously = 
    ${data}`);
});

// the code continue execution once the async call is initiated

for(let i=0;i<10;i++){
    console.log(i);
}