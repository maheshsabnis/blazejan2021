var obj = {x:10};
console.log('obj.x = ' + obj.x);

var obj1 = obj; // Same reference pointers
console.log('After equating obj.x to obj1, the obj.x  = ' + obj.x + ' and obj1.x = '+ obj1.x);

obj1.x = 900;

console.log('After updating obj1.x to 900 , the value ob obj1.x = ' + obj1.x + ' and value of obj.x = ' + obj.x);

// use the Object.assign() mehod

var obj2 = Object.assign({}, obj);
console.log('After asssigning obj.x to obj2, the obj.x  = ' + obj.x + ' and obj2.x = '+ obj2.x);
obj2.x = 700;
console.log('After updating obj2.x to 700 , the value of obj2.x = ' + obj2.x + ' and value of obj.x = ' + obj.x);
