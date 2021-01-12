# Creating Buffer
-- Method 1
var buf = new Buffer(10);
-- Method 2
var buf = new Buffer([10, 20, 30, 40, 50]);
-- Method 3
var buf = new Buffer("Simply Easy Learning", "utf-8");

# Writing Buffers
buf.write(string[, offset][, length][, encoding])
Parameters
Here is the description of the parameters used −

string − This is the string data to be written to buffer.

offset − This is the index of the buffer to start writing at. Default value is 0.

length − This is the number of bytes to write. Defaults to buffer.length.

encoding − Encoding to use. 'utf8' is the default encoding.

# Buffer Length
buf = new Buffer(256);
len = buf.write("Simply Easy Learning");

console.log("Octets written : "+  len);

# Reading from Buffers
buf.toString([encoding][, start][, end])

buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
}

console.log( buf.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // outputs: abcde
console.log( buf.toString('utf8',0,5));    // outputs: abcde
console.log( buf.toString(undefined,0,5));

# Convert Buffer to JSON

buf.toJSON()

Live Demo
var buf = new Buffer('Simply Easy Learning');
var json = buf.toJSON(buf);

console.log(json);


