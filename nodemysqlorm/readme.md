# Working with Node.js and Express REST API to access the MySQL database to perform CRUD Operations using Sequelize

This example explains Node.js application with REST API to perform CRUD operations using MySQL Database with Sequelize package

Step 1: Install Sequelize and Sequelize-Auto in global scope usig the following command
    npm install -g sequelize sequelize-auto mysql2

Step 2: Create a folder of name nodemysqlorm and open this folder in Visual Studio Code (VSCode). Open the Command Prompt (or terminal window on Linux/macOS) and navigate to the nodemysqlorm folder.

Step 3: Run the following command to create package.json file in thie project

    npm init -y

Step 4: Run the following command to install express, mysql2, sequelize, sequelize-auto, cors, body-parser, cors packages in the current project

npm install @types/node express cors body-parser sequelize sequelize-auto mysql2

Step 5: The Sequelize module is used to perform the Data Access Operations using Object-Relational-Mapping (ORM). We can generate the JavaScript objects those are mapped  with the Database Tables. To generate the JavaScript models, run the following command from the command prompt

sequelize-auto -h localhost -d Company -u root -x P@ssw0rd_ --dialect mysql -t Department, Employee

Once this command is executed successfully, the 'models' project is added in to the project and tis folder is added with Departmenty.js, Employee.js and init-models.js files. 

Step 6: In the project add a new file and name this file as 'service.js'. In this file add the following code. This code using Express.js object model to create REST APIs.








