// exported class 
export class Utility {
    getStringLength (str) {
        return str.length;
    }
    reverseString(str){
        let result = ''; 
        for(let i=str.length-1; i>=0; i--){
            result+= str[i];
        }
        return result;
    }
    changeToUpper(str){
        return str.toUpperCase();
    }
    changeToLower(str){
        return str.toLowerCase();
    }
}

export class ClsMath {
    add(x,y) {
        return x+y;
    }
}