module.exports = (sequelize, DataTypes) => {
  const Survey = sequelize.define("Survey", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true
      }
    },
    description: {
      type: DataTypes.STRING
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  });

  Survey.associate = models => {
    Survey.hasMany(models.Question, {
      onDelete: "cascade"
    });
  };

  return Survey;
};
