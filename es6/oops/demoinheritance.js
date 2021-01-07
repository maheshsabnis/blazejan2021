class BaseClass {
    displayBase(){
        console.log('Base Class');
    }
    printMessage(){
        console.log('Print Message in Base Class');
    }

    printNewMessage(msg){
        console.log(`Print Message in Base Class ${msg}`);
    }
}

class DeriveClass extends BaseClass {
    printMessage(){
        console.log('Print Message in Derive Class');
    }
    displayDerive(){
        
        console.log('Derive Class');
    }
    printNewMessage(msg1,msg2){
        super.printNewMessage(msg1); // using super to call base cass methods in derive class
        console.log(`Print Message in Derive Class ${msg1} ${msg2}`);
    }
}


let base = new BaseClass();
base.displayBase();
base.printMessage();
base.printNewMessage('Hi Base Class');


let o  =new DeriveClass();
o.displayBase();
o.displayDerive();
o.printMessage(); // call method from the Derive Class
o.printNewMessage("Hi Derive Class", "You Rocks!!");
o.printNewMessage('I am trying to call Base Class method from Derive class');

// ((BaseClass)o).printMessage(); // the syntax error

