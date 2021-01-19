let setObjects = new Set();

setObjects.add({id:101, name:'A'});
setObjects.add({id:102, name:'B'});
setObjects.add({id:103, name:'C'});
setObjects.add({id:101, name:'A'});  

console.log(`Size of setObjects = ${setObjects.size}`);
console.log(setObjects);

let o1 = {id:101, name:'A'};
let o2 = {id:102, name:'B'};
let o3 = {id:103, name:'C'};

let newSet = new Set();
newSet.add(o1);
newSet.add(o2);
newSet.add(o3);
newSet.add(o1);
console.log(`Size of newSet = ${newSet.size}`);

console.log(newSet);