let fs= require('fs');


// fs.close(); // close the file
// fs.truncate(); // truncate the file
// fs.unlink(); // delete the file
// fs.open(); // open the file for read/write

fs.stat('input1.txt', (err,status)=>{
    if(err) {
        console.log(err.message);
        return;
    }
    console.log(`${status.isFile()}, Size ${status.size}`);
});

// synchronous write
// if the file is not present it will be created by default
// file floag values
// w -> Open file for writing =, if not present  create it
// if available truncate it
// w+ --> File for read and write, reast is like w
 fs.writeFileSync('writefile.txt', 
 'The file is written using Node.js \nfs module synchronously. New data');

 console.log('File Wring is done');
// asynchronous operations
 fs.writeFile('writefileasync.txt', 
   'This  fiel is written asynchronously', (error)=>{
       if(error){
           console.log('Error in Writing the file');
           return;
       }
       console.log('file is written successfully.....');
   });

 for(let i=0; i<10;i++){
     console.log('Processing Some other code');
 }
 console.log();
 for(let i=0; i<10;i++){
    console.log('Processing Some other code');
}
console.log();
try {
    for(let i=0; i<10;i++){
        if(i == 6){
            throw new Error('6 is reached');
        }
       console.log('Processing Some other code');
    }
} catch(e) {
    console.log(e.message);
}



