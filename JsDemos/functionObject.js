function ArrayFrameworkObject(){

    


    // f1 is public to 'myobj'
    var myobj = function(){
          this.f1 = function(){
              console.log('in f1 of myobj in ArrayFrameworkObject');
          } ; 
    };
    return {
        printData: function(arr){
            
            if(arr.length > 0) {
                for(var i=0; i< arr.length;i++) {
                    console.log('Value at ' + i + 'ths position = ' + arr[i]);
                }
            }
        },
        getTopValue:function(arr){
            return arr.pop();
        },
        key: myobj    // storing myobj in 'key' key and returning it
    };
}

ArrayFrameworkObject.prototype.getLength = function(str) {

    return str.length;
};
