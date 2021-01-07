function theRangeIterator(start =0, end= Infinity, step =1) {
    let nextIndex = start;
    let iterationCount = 0;

    const rangeIterator = {
        next: function(){
            let result;
            if(nextIndex < end) {
                result  = {value: nextIndex, done:false}
                nextIndex += step;
                iterationCount++;
                return result;
            }
            return {value: nextIndex, done:true}
        }
    }; 
    return rangeIterator;
}

const iterator = theRangeIterator(1,20,1);
let result = iterator.next();
while(!result.done){
    console.log(result.value);
    result =  iterator.next();
}

console.log(`Iterated over the sequence ${result.value}`);