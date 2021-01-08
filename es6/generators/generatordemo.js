function* myGenerator(start=0,end=100, step=1){
    let count= 0;
    for(let i=0; i<end;i++){
        count++;
        yield i; // read the object and advance to next
    }
    return count;
}

const generator = myGenerator(1,10,1);
let res = generator.next();
while(!res.done){
    console.log(res.value);
    res = generator.next();
}

console.log(`Read the Sequence ${res.value}`);
