function* makeRangeIterator(start = 0, end = 100, step = 1) {
    let iterationCount = 0;
    for (let i = start; i < end; i += step) {
        iterationCount++;
        yield i;
    }
    return iterationCount;
}

const iterator = makeRangeIterator(1,20,1);
let result = iterator.next();
while(!result.done){
    console.log(result.value);
    result =  iterator.next();
}

console.log(`Iterated over the sequence ${result.value}`);