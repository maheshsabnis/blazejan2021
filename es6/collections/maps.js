let map = new Map();

// adding data
map.set(1, 'Sean Connary');
map.set(2, 'George Luznaby');
map.set(3, 'Roger Moore');
map.set(4, 'Trimothy Dalton');
map.set(5, 'Pierce Brosnon');
map.set(6, 'Daniel Craig');

// read element at specific Key

console.log(`Data at 2nd key ${map.get(2)}`);

// check if the data is present
console.log(`Data Present for 6th key ${map.has(6)}`); // true
console.log(`Data Present for 9th key ${map.has(9)}`); // false

console.log(`Size of map ${map.size}`);

map.forEach((value,key)=> {
    console.log(`Data at key ${key} = ${value}`);
});

console.log(`Delete record at key 1 ${map.delete(1)}`);
console.log(`Size of map ${map.size}`);
map.forEach((value,key)=> {
    console.log(`Data at key ${key} = ${value}`);
});
map.clear();
console.log(`Size of map after clear ${map.size}`);