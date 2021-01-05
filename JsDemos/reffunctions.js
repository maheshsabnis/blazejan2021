// libObject--> the global reference that have an access to all publically exposed functions
//  publically exposed functions  means they are self invoked by the global reference using '.' operator            
// this --> The Self-Reference Aliase of the object (HTMLElement, Ref. Function, etc)
var libStringUtilities = function(){

    this.reverse = function(str){
        display();
        var result ='';
        for(var i= str.length-1; i>=0; i--) {
            result+= str[i];
        }
        return result;
    };

    this.changeCase = function(str, c){
        display();
        if(c == 'U' || c == 'u') {
            return str.toUpperCase();
        }
        if(c == 'L' || c == 'l') {
            return str.toLowerCase();
        }
        return str;
    };
    //function that is scopped within the refernce varient only
    function display(){
        console.log('I am a function without this prefix');
    }
    
};

libStringUtilities.prototype.getLength = function(str) {

    return str.length;
};