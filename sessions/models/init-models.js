var DataTypes = require("sequelize").DataTypes;
var _Employee = require("./Employee");

function initModels(sequelize) {
  var Employee = _Employee(sequelize, DataTypes);

  Employee.belongsTo(Department, { foreignKey: "DeptNo"});
  Department.hasMany(Employee, { foreignKey: "DeptNo"});

  return {
    Employee,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
