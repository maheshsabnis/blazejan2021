let user ={
    fname: 'Mahesh',
    lname: 'Sabnis',
    age:44,
    _pwd: '********'
};

// create a proxy

const proxyUser = new Proxy(user, {
    get(target,prop){
        if(prop.startsWith('_')){
            throw new Error('Access Denied, cannot read this value');
        } else {
             let value = target[prop];
             return value;
        }
    },
    set(target,prop,value){
        if(prop.startsWith('_')){
            throw new Error('Access Denied, cannot write this value');
        } else {
            target[prop] = value;
            return true;
        }
    },
    ownKeys(target){
        return Object.keys(target)
            .filter((p,i)=>{
                return p[0] !== '_';
            });
    }
});

try {
    console.log(proxyUser.fname);
    console.log(proxyUser._pwd);
}catch(e){
    console.log(e.message);
}


try{
    console.log(proxyUser);
    

    
    console.log(Object.keys(proxyUser));
    console.log(Object.values(proxyUser));

    proxyUser.fname = "Tejas";
    proxyUser.lname = "Sabnis";
    proxyUser.age = 17;
    console.log(Object.values(proxyUser));
    proxyUser._pwd = "newpassword";
} catch(e){
    console.log(e.message);
}

