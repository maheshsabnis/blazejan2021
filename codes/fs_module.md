# read file
var fs = require("fs");

// Asynchronous read

fs.readFile('input.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});

// Synchronous read

var data = fs.readFileSync('input.txt');
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");

# Open file

fs.open(path, flags[, mode], callback)

Parameters
Here is the description of the parameters used −

path − This is the string having file name including path.

flags − Flags indicate the behavior of the file to be opened. All possible values have been mentioned below.

mode − It sets the file mode (permission and sticky bits), but only if the file was created. It defaults to 0666, readable and writeable.

callback − This is the callback function which gets two arguments (err, fd).



Sr.No.	Flag & Description
1	
r

Open file for reading. An exception occurs if the file does not exist.

2	
r+

Open file for reading and writing. An exception occurs if the file does not exist.

3	
rs

Open file for reading in synchronous mode.

4	
rs+

Open file for reading and writing, asking the OS to open it synchronously. See notes for 'rs' about using this with caution.

5	
w

Open file for writing. The file is created (if it does not exist) or truncated (if it exists).

6	
wx

Like 'w' but fails if the path exists.

7	
w+

Open file for reading and writing. The file is created (if it does not exist) or truncated (if it exists).

8	
wx+

Like 'w+' but fails if path exists.

9	
a

Open file for appending. The file is created if it does not exist.

10	
ax

Like 'a' but fails if the path exists.

11	
a+

Open file for reading and appending. The file is created if it does not exist.

12	
ax+

Like 'a+' but fails if the the path exists.


# Code


var fs = require("fs");

// Asynchronous - Opening File

console.log("Going to open file!");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
   console.log("File opened successfully!");     
});

# Get FIle Information
fs.stat(path, callback)

# Code d
var fs = require("fs");

console.log("Going to get file info!");
fs.stat('input.txt', function (err, stats) {
   if (err) {
      return console.error(err);
   }
   console.log(stats);
   console.log("Got file info successfully!");
   
   // Check file type
   console.log("isFile ? " + stats.isFile());
   console.log("isDirectory ? " + stats.isDirectory());    
});


# Writing file
Live Demo
var fs = require("fs");

console.log("Going to write into existing file");
fs.writeFile('input.txt', 'Simply Easy Learning!', function(err) {
   if (err) {
      return console.error(err);
   }
   
   console.log("Data written successfully!");
   console.log("Let's read newly written data");
   
   fs.readFile('input.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("Asynchronous read: " + data.toString());
   });
});

# Reading File


Parameters
Here is the description of the parameters used −

fd − This is the file descriptor returned by fs.open().

buffer − This is the buffer that the data will be written to.

offset − This is the offset in the buffer to start writing at.

length − This is an integer specifying the number of bytes to read.

position − This is an integer specifying where to begin reading from in the file. If position is null, data will be read from the current file position.

callback − This is the callback function which gets the three arguments, (err, bytesRead, buffer).

# Code

var fs = require("fs");
var buf = new Buffer(1024);

console.log("Going to open an existing file");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
   console.log("File opened successfully!");
   console.log("Going to read the file");
   
   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      if (err){
         console.log(err);
      }
      console.log(bytes + " bytes read");
      
      // Print only read bytes to avoid junk.
      if(bytes > 0){
         console.log(buf.slice(0, bytes).toString());
      }
   });
});


# CLose File

var fs = require("fs");
var buf = new Buffer(1024);

console.log("Going to open an existing file");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
   console.log("File opened successfully!");
   console.log("Going to read the file");
   
   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
      if (err) {
         console.log(err);
      }

      // Print only read bytes to avoid junk.
      if(bytes > 0) {
         console.log(buf.slice(0, bytes).toString());
      }

      // Close the opened file.
      fs.close(fd, function(err) {
         if (err) {
            console.log(err);
         } 
         console.log("File closed successfully.");
      });
   });
});


# Truncate File

fs.ftruncate(fd, len, callback)

Parameters
Here is the description of the parameters used −

fd − This is the file descriptor returned by fs.open().

len − This is the length of the file after which the file will be truncated.

callback − This is the callback function No arguments other than a possible exception are given to the completion callback.

# Code

var fs = require("fs");
var buf = new Buffer(1024);

console.log("Going to open an existing file");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
   console.log("File opened successfully!");
   console.log("Going to truncate the file after 10 bytes");
   
   // Truncate the opened file.
   fs.ftruncate(fd, 10, function(err) {
      if (err) {
         console.log(err);
      } 
      console.log("File truncated successfully.");
      console.log("Going to read the same file"); 
      
      fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
         if (err) {
            console.log(err);
         }

         // Print only read bytes to avoid junk.
         if(bytes > 0) {
            console.log(buf.slice(0, bytes).toString());
         }

         // Close the opened file.
         fs.close(fd, function(err) {
            if (err) {
               console.log(err);
            } 
            console.log("File closed successfully.");
         });
      });
   });
});


# Delete File

fs.unlink(path, callback)

Parameters
Here is the description of the parameters used −

path − This is the file name including path.

callback − This is the callback function No arguments other than a possible exception are given to the completion callback.

# Code

var fs = require("fs");

console.log("Going to delete an existing file");
fs.unlink('input.txt', function(err) {
   if (err) {
      return console.error(err);
   }
   console.log("File deleted successfully!");
});


# Create a Directory

fs.mkdir(path[, mode], callback)

Parameters
Here is the description of the parameters used −

path − This is the directory name including path.

mode − This is the directory permission to be set. Defaults to 0777.

callback − This is the callback function No arguments other than a possible exception are given to the completion callback.


var fs = require("fs");

console.log("Going to create directory /tmp/test");
fs.mkdir('/tmp/test',function(err) {
   if (err) {
      return console.error(err);
   }
   console.log("Directory created successfully!");
});


# Read a Directory
fs.readdir(path, callback)

Parameters
Here is the description of the parameters used −

path − This is the directory name including path.

callback − This is the callback function which gets two arguments (err, files) where files is an array of the names of the files in the directory excluding '.' and '..'.


# Code

var fs = require("fs");

console.log("Going to read directory /tmp");
fs.readdir("/tmp/",function(err, files) {
   if (err) {
      return console.error(err);
   }
   files.forEach( function (file) {
      console.log( file );
   });
});

# Delete / Remove Directory

fs.rmdir(path, callback)

Parameters
Here is the description of the parameters used −

path − This is the directory name including path.

callback − This is the callback function No arguments other than a possible exception are given to the completion callback.

# Code

var fs = require("fs");

console.log("Going to delete directory /tmp/test");
fs.rmdir("/tmp/test",function(err) {
   if (err) {
      return console.error(err);
   }
   console.log("Going to read directory /tmp");
   
   fs.readdir("/tmp/",function(err, files) {
      if (err) {
         return console.error(err);
      }
      files.forEach( function (file) {
         console.log( file );
      });
   });
});







