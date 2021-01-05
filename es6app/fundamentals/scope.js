function printData(x) {
    if (x) {
        // the block scope declaration in ES 6
        let y = 10;
        console.log('In Condition ' + y);
    }
    // console.log('Out Condition ' + y);
}
printData(true);
printData(false);

// for loops
for (let i = 0; i < 3; i++) {
    console.log('In Loop ' + i);
}
console.log('Out Loop ' + i);