let express  =require('express');


// adding the body-parser as a middleware in the express
let bodyParser = require('body-parser');

//load cors module
let cors = require('cors');

let instance = express();

 
instance.use(bodyParser.urlencoded({extended:false}));
 
instance.use(bodyParser.json());
 

instance.use(cors({
    origin: "*", // all origins
    methods: "*", // all http methods
    allowedHeaders: "*" // all headers in HTTP request
}));


 
let employees = [
    {EmpNo:101, EmpName: 'Mahesh', DeptName: 'IT'},
    {EmpNo:102, EmpName: 'Vikram', DeptName: 'HRD'},
    {EmpNo:103, EmpName: 'Suprotim', DeptName: 'SALES'}
];

 
instance.get("/api/employees", (req,resp)=>{
           resp.status(200).send(employees);
});

 

instance.get("/api/employees/:id",(req,resp)=>{
 // read the URL parameter
 let id = req.params.id;    

 // search the record based on id
 let emp = employees.filter((e,idx)=>{
     return e.EmpNo == parseInt(id);
 }); 
  if(emp.length == 0) {
      resp.status(404).send(`Requested EmpNo ${id} is not available`);
  } 
  resp.status(200).send(emp[0]);
});

// the post request
instance.post("/api/employees", (req,resp)=> {
    // the EXPRESS.JS cannot by default parse the body
    // read the posted data from the client
    let emp = {
        EmpNo:req.body.EmpNo,
        EmpName: req.body.EmpName, 
        DeptName: req.body.DeptName
    };
    console.log(JSON.stringify(emp));
    // process the data
    employees.push(emp);
    // send the response (success or fail)
    resp.status(200).send(employees);
});

 
instance.listen(9002, ()=>{
    console.log('REST API is listening on port 9001');
});