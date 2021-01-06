let values = new Set();

values.add(10);
values.add(20);
values.add(30);
values.add(40);
values.add(50);
values.add(10);

console.log(`Size of set is = ${values.size}`); // 5 because 10 is repeated

values.forEach((v)=>{
    console.log(`Value  = ${v}`);
});
console.log(`Is Exists 10 in set ${values.has(10)}`);

console.log(`Is Exists 60 in set ${values.has(60)}`);

console.log(`Remove 50 from set ${values.delete(50)}`);
values.forEach((v)=>{
    console.log(`Value  = ${v}`);
});
values.clear();
console.log(`Size of set is = ${values.size}`);
