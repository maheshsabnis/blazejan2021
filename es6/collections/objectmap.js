let products = new Map();

products.set(1, {id:101, name:'Desktop', category:'ECT', price:10000});
products.set(2, {id:102, name:'Laptop', category:'ECT', price:20000});
products.set(3, {id:103, name:'Iron', category:'ECL', price:5000});
products.set(4, {id:104, name:'Mixer', category:'ECl', price:6000});
products.set(5, {id:105, name:'Biscuts', category:'FOD', price:10});
products.set(6, {id:106, name:'Lays', category:'FOD', price:30}); // overwritten
products.set(6, {id:107, name:'Rice', category:'FOD', price:80}); // overwritten
products.set(6, {id:108, name:'Grains', category:'FOD', price:80}); // read

 


//  products.entries() will iterate over the Map and return each entry from it
for(let prd of products.entries()){
   //console.log(prd); // prd is array prd[0] is key and prd[1] is JSON object
    if(prd[1].category == 'FOD') {
        console.log(prd[1]);
    }

}