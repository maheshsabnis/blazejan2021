console.log('Process 1');
console.log('Process 2');
console.log('Process 3');
console.log('Process 4');

setTimeout(() => {
    console.warn('Process 5')
}, 3000);
setInterval(() => {
    console.log('Process 5.1');
}, 2000);
console.log('Process 6');
console.log('Process 7');
for (let i = 0; i < 5; i++) {
    console.log('Process 8');

}