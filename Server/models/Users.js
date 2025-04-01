module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    empID: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    // title: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    units: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nic: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Users;
};
