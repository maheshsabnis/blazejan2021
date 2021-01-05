let names = ["Mahesh", "Tejas", "Anil", "Vikram", "Vijay", "Mukesh"];

function printName(n, i) {
    console.log(`Name at ${i}ths index is = ${n}`);
}
// explicit passing of the callback function
names.forEach(printName);

console.log();
// implicit callback , implementation passed to method
names.forEach(function(n, i) {
    console.log(`Name at ${i}ths index is = ${n}`);
});
console.log();

console.log('Arrow operators');

// implicit callback are replaced by arrao operators =>
names.forEach((n, i) => {
    console.log(`Name at ${i}ths index is = ${n}`);
});