class MyClass {
    // constructor
    constructor() {
        let c = 100;
        // all public data memebrs of class must be declared in constructor
        // prefixed using 'this'
        this.x = 100;
        this.y = 200
    }
    reverse(arr) {
        return arr.reverse();
    }
    sort(arr) {
        return arr.sort();
    }
}