var obj = {}; // defining an empty schema object

// define schema separately
// defining a data member for the object
obj.x = 100;
console.log(obj.x);
// defining a function for the object
obj.f1 = function(a,b){
    return a +b;
};
console.log(obj.f1(10,20));
// object with defauilt Schema
// Key:Value
// where key is the property and value is the data or implementation to ptocess the data
// the members of the object are acessed inside the object using 'this' reference aka
// the 'scope'
var empObj = {
    EmpNo:101, 
    EmpName: 'Mahesh',
    display:function(){
        console.log('EmpNo  = ' + this.EmpNo + '  EmpName = ' + this.EmpName);
    }
};

empObj.display();
empObj.EmpNo = 201;
empObj.EmpName = "Akash";
empObj.display();
