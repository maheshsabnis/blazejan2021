function decide(x) {
    if(x){
        let i=10;
        console.log('Inside If Statement i  = ' + i);
    }
    console.log('Outside If Statement i  = ' + i);
}

decide(true);
decide(false);