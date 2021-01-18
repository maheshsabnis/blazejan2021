const express  = require('express');
const session = require('express-session');

const app = express();

app.use(session({
    // the secret key
    secret: 'The_Secrey_Key',
    // force the session to be 
    // in the session store 
    resave: true,
    saveUninitialized: true,

}));

app.get("/", (req, res)=>{ 
       
    // req.session.key = value 
    req.session.id = 'SessionId';
    return res.send("Session Set"); 
}) ;

app.get("/session", (req, res)=>{ 
   
    var sessionid = req.session.id;
    return res.send(sessionid); 
   
   
}) ;

app.get('/destroy',(req,res)=>{
    console.log('destroy');
 /*  To destroy session you can use 
        this function  */
     req.session.destroy((error)=>{ 
        console.log("Session Destroyed") ;
    }) ;
    return res.send("Session Destroyed"); 
});
    
app.listen(5090, (error)=>{ 
    if(error) throw error; 
    console.log("Server created Successfully on PORT :", 5090) ;
}) ;