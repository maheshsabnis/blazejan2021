let myarr = [1,2,3,4,5];

myarr.forEach((n,idx)=> {
    // modifying an array inside the foreach by multiplying each element by 2
   return myarr[idx] = n *2;
});

console.log(`Doubled Output array ${JSON.stringify(myarr)}`);

let res = myarr.map((n,idx)=>{
    return n * 2;
});
console.log(`Doubled Output array ${JSON.stringify(res)}`);