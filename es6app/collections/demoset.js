let data = new Set();
// data.add(10);
// data.add(20);
// data.add(30);
// data.add(40);
// data.add(10);

// data.forEach((v, i) => {
//     console.log(v);
// });
// console.log(`No. of Elements in Set ${data.size}`);
// console.log(data.has(30));
// console.log(data.delete(40));
// console.log();
// data.forEach((v, i) => {
//     console.log(v);
// });
// data.clear();
// console.log(`No. of Elements in Set after clear ${data.size}`);

data.add({ id: 101, name: 'A' });
data.add({ id: 102, name: 'B' });
data.add({ id: 103, name: 'C' });
data.add({ id: 104, name: 'D' });
data.add({ id: 101, name: 'A' });
data.forEach((o, i) => {
    console.log(JSON.stringify(o))
});