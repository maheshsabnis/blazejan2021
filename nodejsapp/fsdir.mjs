// ES 6 mechanism of importing module in the file
import * as fs from 'fs';

// creating file
fs.mkdir('tempdir', (err)=> {
    if(err) {
        console.log(`Directory Creation failed ${err.message}`);
        return;
    }
    console.log('directory is created successfully');
});

// to remove the directory use fs.rmdir();

// read all files

console.log('Reading files from the Directory Asybchronously');
// if directory is found then all files will be stored in the string array
fs.readdir('./tempdir', (err,files)=>{
    if(err){
        console.log(`Error Occured ${err.message}`);
        return;
    }
    if(files.length >0 ) {
        files.forEach((file,index)=>{
            // reading only files and skipping subfolder / subdirectories
            fs.stat(`./tempDir/${file}`, (err,stat)=>{
               if(err) {
                   console.log(`File Status Error ${err.message}`);
                   return;
               }    
               if(stat.isFile()) {
                   // only reading  files for tempDir
                    console.log(file);
               } 
            });

 console.log(file);
        });
    } else {
        console.log('Directory is empty');
    }

});