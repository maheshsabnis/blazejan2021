class AbstractClass {
    constructor(){
        // check if the instance of class 'Abstract' is tried
        // if yes then throw error
        if(new.target == AbstractClass) {
            throw new TypeError("Cannot create an instance of Abstrat class");
        }
    }
    baseClassMethod() {
        console.log("I am base cass method");
    }
}

class DeriveFromAbstractClass extends AbstractClass {
    constructor(){
        super();
    }
    printMessage(){
        console.log('I am derive class');
    }
}

let abstract = new AbstractClass(); // throw error
abstract.baseClassMethod();
