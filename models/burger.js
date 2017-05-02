module.exports = function(sequelize, DataTypes) {
  var burgers = sequelize.define("burgers", {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      validate: {
        len: [1]
      }
    },
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      len: [1]
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      len: [1]
    }
  });
  return burgers;
};