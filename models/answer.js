module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define("Answer", {
    style: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true
      }
    },
    value: {
      type: DataTypes.STRING
    }
  });

  Answer.associate = models => {
    Answer.belongsTo(models.Question, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Answer;
};
