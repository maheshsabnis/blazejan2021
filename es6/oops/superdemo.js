class TheBase {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    addSquare(){
        return (this.x*this.x) + 2*this.x*this.y + (this.y*this.y);
    }
}

class TheDerive extends TheBase {
    constructor(a,b){
        super(a,b);
    }

    subsctSquare(){
        return (this.x*this.x) - 2*this.x*this.y + (this.y*this.y);
    }
}

let o= new TheDerive(10,20);
console.log(`Add Square ${o.addSquare()}`);
console.log(`Subst Square ${o.subsctSquare()}`);
