const { Sequelize, Model, DataTypes } = require('sequelize');

  const path = require('path');
    
        const sequelize = new Sequelize("Company", "root", "P@ssw0rd_", {
            host: 'localhost',
            dialect: 'mysql',
            pool: {
                max: 5,
                min: 0,
                idle: 10000
            },
            define: {
                timestamps: false // supressing the TimeStamp generated by ORM
            }
        });
  
        // @ts-ignore
        const dept = require(path.join(__dirname, './../models/Department'))( sequelize, Sequelize.DataTypes);

class DepartmentDal {
    async createUser(req,resp){
        let newdept = {
             DeptNo: req.body.DeptNo,
             DeptName: req.body.DeptName,
             Location: req.body.Location,
             Capacity: req.body.Capacity
        };
      
     
        await sequelize.sync({
                force: false  
            });
         
        
        const created = await  dept.create(newdept);
        
        return resp.status(200).send({response:created});
    }

    async getdepats(req,resp){
        
        await sequelize.sync({
            force: false  
        });
        const find  = await dept.findAll();
        console.log(`The Session Name in ${req.session.name}`);
        return resp.status(200).send({response:find});
    }
}

module.exports =  DepartmentDal;