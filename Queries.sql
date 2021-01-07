Use Company
 /* Create a new Table*/
Create Table Department (
  DeptNo int Primary Key,
  DeptName varchar(200) not null,
  Location varchar(200) not null
)

/*Add Column*/
Alter table Department Add Column Capacity int not null

Create Table Employee (
  EmpNo int Primary Key,
  EmpName varchar(200) Not null,
  Designation varchar(200) Not null,
  Salary int not null,
  DeptNo int not null,
  Constraint FK_DEPTNO
  Foreign Key (DeptNo) References Department (DeptNo)
)
