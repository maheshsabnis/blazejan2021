for(var i=0;i<10;i++) {
    console.log('Inside loop i = ' + i);
}
console.log('Ouside loop i = ' + i);
i++;
console.log('Ouside loop after increament i = ' + i);

function display(){
console.log('inside display i = ' + i);
}

display();