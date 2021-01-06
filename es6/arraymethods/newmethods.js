let values = ["Mahesh", "Suprotim", "Vikram", "Subodh", "Sumit", "Pankaj", "Saket", "Manish"];


// explict function

function printValeus(v,i){
    console.log(`Value at ${i}th position = ${v}`);
}

// pasing the explicitely defined callback function
values.forEach(printValeus);
console.log();
console.log('Passing Callback');

values.forEach(function(v,i){
    console.log(`Value at ${i}th position = ${v}`);
});

console.log();
console.log('ES 6 Arrow Operators');
// Arrow
// the callback is executed once for each element in array
// this does not return anything, instead just process an element
values.forEach((v,i)=> {
    console.log(`Value at ${i}th position = ${v}`);
});

console.log();
console.log('ES 6 map() like forEach added in ES 6 to read values as key value pair');
// for every element its creates a new array with the result returned by calling 
//  callback function for each element
values.map((v,i)=> {
    console.log(`Value at ${i}th position = ${v}`);
});

