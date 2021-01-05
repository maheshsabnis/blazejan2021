 class Base {
     constructor(a, b) {
         this.a = a;
         this.b = b;
     }
     static add() {
         return this.a + this.b;
     }
     sub() {
         return this.a - this.b;
     }
 }

 class Derive extends Base {
     constructor(x, y) {
         super(x, y);
     }
     addX() {
         console.log('Derive ' + this.a + '  ' + this.b);
         return this.a + this.b;
     }
     sub() {
         console.log('Derive ' + this.a + '  ' + this.b);
         return this.a - this.b;
     }
 }


 let obj = new Derive(10, 30);

 console.log(`add = ${Derive.add()}`);
 console.log(`sub = ${obj.sub()}`);

 let ob = new Base(300, 400);