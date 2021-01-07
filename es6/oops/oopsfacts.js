// unnamed class
//  the class name is not explicitely set, but the Transpiler takes the class name as the
// referece variant e.g. Square
let Square = class {
    constructor(side){
        this.side = side;
    }
    area(){
        return this.side * this.side;
    }
};

console.log(Square.name);
let s = new Square(10);
console.log(`Area = ${s.area()}`);

// names class
// storing the class reference in a reference variant
let Rectangle = class ReactangleClass {
    constructor(h,w){
        this.height = h;
        this.width = w;
    }
    area(){
        return this.height * this.width;
    }
};

console.log(`Class Name ${Rectangle.name}`);
// the instance of the class RectangleClass is declared using the reference varient
let r = new Rectangle(300,400);
console.log(`Area = ${r.area()}`);

