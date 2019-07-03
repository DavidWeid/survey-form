const db = require("../models");

module.exports = app => {
  // Send all current User's
  app.get("/api/users", (req, res) => {
    console.log("users api route");
    db.User.findAll({}).then(dbUser => {
      res.json(dbUser);
    });
  });

  // Send the currently active Survey
  app.get("/api/surveys/active", (req, res) => {
    console.log("surveys api route");
    db.Survey.findAll({ active: true }).then(dbSurvey => {
      res.json(dbSurvey);
    });
  });
};
