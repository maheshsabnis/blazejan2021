class MyClass {

    #privatefield = 0;
   
    constructor(){
        this.#privatefield = 100;
        this.n1 = 0;
        this.n2 = 0;
        this.name = ["Mukesh", "Vivek", "Satish", "Vinay", "Mahesh"];
    }
    
    add(x,y){
        console.log(this.#privatefield);
        return x +y;
    }


    // private methods

    #myMessage(){
        console.log('Message from Private method');
    }

    printMessage(){
        this.#myMessage();
    }

    // static private method
    static #privateMethod(val){
        return val * val;
    }

    // calling Static Private Method
    CallStaticPrivateMethod(v){
        return MyClass.#privateMethod(v);
    }


    // read-only property
    get filterNames() {
        // returns string having 'a' in it
        let res = this.name.filter((n,idx)=> {
            if(n.indexOf('a') !== -1) {
                return n;
            }
        });
        return res;
    }

    // setter
    // assign value to class data member
    set Num1(val) {
        // custom logic
        if(val <=0) {
            this.n1 = 0
        } else {
            this.n1 = val;
        }

    }
    // getter
    // return value
    get Num1(){
        // custom logic
        return this.n1;
    }



    // add(x,y,z) {
    //     return x+y+z;
    // }

    static message = "I am a Static Member";

    static generateSquare(x) {
        return x * x;
    }
     
}

let o = new MyClass();

 

// the class will overwrite the add for 2 parameters
// and will return result as NaN
console.log(`Add 2 = ${o.add(10,20)}`);

o.printMessage();

console.log(`Accessing Private Method ${o.CallStaticPrivateMethod(30)}`);


// the later method i.e. add(x,y,x,z) wil be executed by JavaScript parser
// resut will be 60
// console.log(`Add 3 = ${o.add(10,20,30)}`);

// the following statement will generate result as 'undefined'
console.log(o.message); 

console.log(`Message = ${MyClass.message}`);

console.log(`Square of 100 = ${MyClass.generateSquare(100)}`);

o.Num1 = 100;
console.log(`Value of Num1 = ${o.Num1}`);

o.Num1 = -888;
console.log(`Value of Num1  with -ve set= ${o.Num1}`);

console.log(o.filterNames);
