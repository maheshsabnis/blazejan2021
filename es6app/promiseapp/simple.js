console.log('Check T1');
console.log('Check T2');
console.log('Check T3');
setTimeout(() => {
    setTimeout(() => { console.log('Wait') }, 3000);
    console.log('Check T4');

}, 3000)
console.log('Check T5');
console.log('Check T6');

for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log('Check Others ' + i);

    }, 6000)
}