class DemoProps {
    constructor() {
        this.val = 0;
    }
    set Val(v) {
        this.val = v;
    }
    get Val() {
        return this.val;
    }
}

let obj = new DemoProps();
obj.Val = 100;
console.log(obj.Val);