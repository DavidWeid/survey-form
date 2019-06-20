module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    fullname: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true
      }
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  return User;
};
