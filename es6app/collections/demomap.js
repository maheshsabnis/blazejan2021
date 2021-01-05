let data = new Map();
data.set(1, { id: 101, name: 'A' });
data.set(2, { id: 102, name: 'B' });
data.set(3, { id: 103, name: 'C' });
data.set(4, { id: 104, name: 'D' });
data.set(5, { id: 105, name: 'E' });

data.forEach((n, i) => {
    console.log(JSON.stringify(n));
});
console.log();
for (let i of data.entries()) {
    console.log(i);
}
console.log();
console.log(data.get(1));
console.log(data.has(5)); // true
console.log(data.has(6)); // false
console.log(data.delete(5)); // true
console.log(data.delete(6)); // true
console.log();
for (let i of data.entries()) {
    console.log(i);
}