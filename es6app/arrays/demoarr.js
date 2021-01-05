let names = ["Mahesh", "Tejas", "Anil", "Vikram", "Vijay", "Mukesh"];
let res = [];
names.forEach((n, i) => {
    if (n.length >= 6) {
        res.push(n);
    }
});

names.map((n, i) => {
    console.log(`Using Map ${n}`);
});

console.log(JSON.stringify(res));
console.log();
let res1 = names.filter((n, i) => {
    return n.charAt(0) === 'V';
});
console.log(JSON.stringify(res1));

let sortRes = names.sort();
console.log(JSON.stringify(sortRes));

let reverseRes = names.reverse();
console.log(JSON.stringify(reverseRes));
console.log(names.indexOf('Vikram'));
console.log(names.indexOf('Tejas'));
console.log(names.indexOf('Tejas1'));
console.log(names.pop());
console.log(JSON.stringify(names));