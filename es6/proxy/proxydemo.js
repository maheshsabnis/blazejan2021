// target object

const targetObj = {
    msg1:"Hello",
    msg2: "World"
};
// handler object
// crrently empty
const handler ={};

// defining the proxy
// pxy1 is proxying for the actual target object
const pxy1 = new Proxy(targetObj, handler);

// client app
function getMessage(){
    let message='';
    message = `${pxy1.msg1} ${pxy1.msg2}`;
    return message;
}

console.log(getMessage());


