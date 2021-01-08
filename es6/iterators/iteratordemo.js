// define a function with default named parameters
// these parameters will represnt following 3 things
// 1. startIndex, the index from which iteration for the collection will start 
// 2. endIndex, the last index of colleciton to stop 
// 3. stepValue, the value based on which the iterator will advance itself to read next recodrs

// [1,20,1]
// startIndex  =1, endIndex = 20, step=1
// Infinity is ES 6 number variable that represent the max value to be used in execution  
function cutomRangeIterator(startIndex=0, endIndex = Infinity, step=1){
    // local counter definition
    let nextIndex = startIndex;
    let count = 0; // represent the index inside collection that is read

    // write the iterator
    const rangeReaderIterator = {
        next:function(){
            let output;
            if(nextIndex < endIndex){
                // define the object that will contains the output value
                // form the collection
                // value is the data, done is the flag indicating that the
                // iteration is still continue 
                output = {value: nextIndex, index:count ,done:false};
                nextIndex += step; // advance to next
                count++; // increament the count for output collection generated
                return output; // current record
            }
            return {value: nextIndex, index:count, done:true}; // return the final collection 
        }
    };
    return rangeReaderIterator; // final output 
}
// the customIterator is a custom collection having
// startIndex = 1, endIndex = 20, step 1 
const customIterator = cutomRangeIterator(1,200,4);

// lets iterate over the customIterator
let result = customIterator.next();
while(!result.done){
    console.log(`Vaue at current position = ${result.value} index = ${result.index}`);
    result = customIterator.next(); // move to nect value
}
console.log(`The Custom Collection Sequesnce is ${result.value}`);

