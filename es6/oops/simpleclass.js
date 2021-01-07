class SimpleClass {
    constructor(){
        // public declaration of the 
        this.x  = 10;
        this.y  = 20;
    }

     add(){
         return this.x + this.y;
     }
}

// instane of the class
let obj = new SimpleClass(); 

 
 console.log(`Add = ${obj.add()}`);