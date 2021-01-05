let o1 = { x: 10 };
let o2 = o1;
console.log(`${o1.x} && ${o2.x}`);
o2.x = 20;
console.log(`${o1.x} && ${o2.x}`);
console.log(`${o1 == o2} --------- ${o1 === o2}`);


let o3 = Object.assign({}, o1);
console.log(`${o1.x} && ${o3.x}`);
o3.x = 1000;
console.log(`${o1.x} && ${o3.x}`);

console.log(`${o1 == o3} --------- ${o1 === o3}`);

console.log(typeof(o1) + '  ' + typeof(o2) + '    ' + typeof(o3));

o3.y = 100;
console.log(` ${o3.x} ${o3.y}`);

// ================================================================================