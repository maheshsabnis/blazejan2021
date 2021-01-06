// standard JavaScript array as input parameter
function sumArray(values){
    var sum = 0;
    if(values.length > 0) {
        values.forEach((v,i)=>{
            sum+=v;
        });
    }
    return sum;
}

console.log(`1 parameter = ${sumArray([1])}`);
console.log(`2 parameter = ${sumArray([1,2])}`);
console.log(`3 parameter = ${sumArray([1,2,3])}`);
console.log(`4 parameter = ${sumArray([1,2,3,4])}`);

// ES 6 rest parameter
function sumArrayRest(...values){
    var sum = 0;
    if(values.length > 0) {
        values.forEach((v,i)=>{
            sum+=v;
        });
    }
    return sum;
}

console.log(`1 parameter = ${sumArrayRest(1)}`);
console.log(`2 parameter = ${sumArrayRest(1,2)}`);
console.log(`3 parameter = ${sumArrayRest(1,2,3)}`);
console.log(`4 parameter = ${sumArrayRest(1,2,3,4)}`);

// array with length as 3
let arr = [10,20,30];
console.log(arr);

arr = [...arr,40,50,60,70,80]; // pure object immutation (adding new values in same object)
console.log(arr);