 
let Emps = [{
    EmpNo:101,EmName:'A'
},{
    EmpNo:102,EmName:'B'
},{
    EmpNo:103,EmName:'C'
}];
console.log(JSON.stringify(Emps));

function process(x){
    return x*x;
}

console.log(`x Square = ${process(100)}` );