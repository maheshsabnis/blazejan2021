const express = require('express');
const bodyParser =  require('body-parser');
const cors = require('cors');
const sessions = require('express-session');


// @ts-ignore
const UserDal = require('./dals/usersDal');
 
let instance = express();
let router = express.Router();
instance.use(bodyParser.json());
instance.use(bodyParser.urlencoded({ extended: false }));
instance.use(cors());

// configure the session
instance.use(sessions({
    secret:'xyZ321zxY',
    resave:false,
    saveUninitialized:true,
    cookie:{maxAge:60000}
}));


const userObj = new UserDal();
 

instance.post('/api/users', userObj.createUser);
instance.post('/api/authuser', userObj.authUser);

instance.get('/api/departments', userObj.getdepts);


instance.listen(8078, ()=>{
 console.log(`Server Started on port 8078`);
});