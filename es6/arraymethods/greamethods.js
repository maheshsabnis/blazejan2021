let values = ["Mahesh", "Suprotim", "Vikram", "Subodh", "Sumit", "Pankaj", "Saket", "Manish", "Abhijit", "Kumarmangalam"];

values.forEach((v,i)=>{
    if(v.length > 6){
        console.log(v);
    }
});
// return an array having length greater than
let res = values.filter((v,i)=>{
    return v.length > 6;
});
console.log(JSON.stringify(res));

console.log(JSON.stringify(values.sort()));

let sortByLengt = values.sort((v1,v2)=>{
    return v1.length - v2.length; // if +ve then v1 is greater that v2 in length, -ve v1 is less than v2 in length, 0 menas equal length
});

console.log(JSON.stringify(sortByLengt));


 sortByLengt = values.sort((v1,v2)=>{
    return v2.length - v1.length;
});

console.log(JSON.stringify(sortByLengt));


console.log(JSON.stringify(values.reverse()));

// using find 
// return the first match element based on condition and return it
// chrome,Edge, Firefox, Safari, opera
let findRes = values.find((v)=> {
    return v.length > 6;
});

console.log(findRes);



