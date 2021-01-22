const express = require('express');
const bodyParser =  require('body-parser');
const cors = require('cors');
// @ts-ignore
const UserDal = require('./dals/usersDal');
let instance = express();
instance.use(bodyParser.json());
instance.use(bodyParser.urlencoded({ extended: false }));
instance.use(cors());

const userObj = new UserDal();

instance.post('/api/users', userObj.createUser);
instance.post('/api/authuser', userObj.authUser);

instance.listen(8078, ()=>{
 console.log(`Server Started on port 8078`);
});