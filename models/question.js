module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define("Question", {
    text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true
      }
    },
    type: {
      type: DataTypes.STRING
    }
  });

  Question.associate = models => {
    Question.belongsTo(models.Survey, {
      foreignKey: {
        allowNull: false
      }
    });
    Question.hasMany(models.Answer, {
      onDelete: "cascade"
    });
  };

  return Question;
};
