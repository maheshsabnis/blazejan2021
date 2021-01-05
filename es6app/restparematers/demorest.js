// ... spread operators
function summation(...value) {
    let sum = 0;
    if (value.length > 0) {
        value.forEach((v, i) => {
            sum += v;
        });
    } else {
        console.log('no p');
    }
    return sum;
}

console.log(`Summation of 2 number ${summation(2,3)}`); // parsing as array
console.log(`Summation of 3 number ${summation(2,3,4)}`); // parsing as array
console.log(`Summation of 4 number ${summation(2,3,4,5)}`); // parsing as array
console.log(`Summation of 5 number ${summation(2,3,4,5,6)}`); // parsing as array
console.log(`Summation of 6 number ${summation(2,3,4,5,6,7)}`);

let arr = [10, 20];
console.log(arr);
let newarr = [...arr, 30, 40, 50, 60, 70]; // deep copy of arr with additional values store 

//in newarr
console.log(newarr);

arr = [...arr, 30, 40, 50, 60, 70]; // deep copy of arr with additional values of arr
console.log(arr);