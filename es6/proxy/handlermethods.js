// actual array object
const numbersArray = [1,2,3,4];

// handler
const numberHandler = {
    get:function(target,property){
        // the value at the index present in the array
        if(property in target){
            return target[property]; // if the target object has the property/entry then return index
        } else {
            return 0; // not available
        }
    }
};

// define proxy
const pxy2 = new Proxy(numbersArray, numberHandler);
// clent
function checkValues(){
    // the get() rule interceptor will be execute to check if number is present at the index
    console.log(pxy2[1]);  // return 2
    console.log(pxy2[3]); // return 4
    console.log(pxy2[5]); // return 0
}

checkValues();


// create a handler that will set() values in array only of the type number


// handler
const setHandler = {
    // write data in array  only of the type number
    set:function(target, prop, value){
        if(typeof(value) == 'number') {
             target[prop] = value; // add the value as number at specific index
             return true;  
        } else {
            return false;
        }
    }
};

const proxyArray = new Proxy(numbersArray, setHandler);

function pushData(){
    proxyArray.push(10);
    proxyArray.push(20);
    console.log(`Length of array  = ${numbersArray.length} and ${JSON.stringify(numbersArray)}`);

    proxyArray.push('ABC');

}

pushData();
