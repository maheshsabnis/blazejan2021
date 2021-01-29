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


 
let departments = [
    {DeptNo:10, DeptName: 'IT' },
    {DeptNo:20, DeptName: 'System' },
    {DeptNo:30, DeptName: 'HRD' }
];

 
instance.get("/api/departments", (req,resp)=>{
           resp.status(200).send(departments);
});

 

instance.get("/api/departments/:id",(req,resp)=>{
 // read the URL parameter
 let id = req.params.id;    

 // search the record based on id
 let Dept = departments.filter((e,idx)=>{
     return e.DeptNo == parseInt(id);
 }); 
  if(Dept.length == 0) {
      resp.status(404).send(`Requested DeptNo ${id} is not available`);
  } 
  resp.status(200).send(Dept[0]);
});

// the post request
instance.post("/api/departments", (req,resp)=> {
    // the EXPRESS.JS cannot by default parse the body
    // read the posted data from the client
    let Dept = {
        DeptNo:req.body.DeptNo,
        DeptName: req.body.DeptName
       
    };
    console.log(JSON.stringify(Dept));
    // process the data
    departments.push(Dept);
    // send the response (success or fail)
    resp.status(200).send(departments);
});

 
instance.listen(9001, ()=>{
    console.log('REST API is listening on port 9001');
});