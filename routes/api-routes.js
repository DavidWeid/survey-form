const db = require("../models");

module.exports = app => {
  app.get("/api/users", (req, res) => {
      console.log("api route");
    db.User.findAll({}).then(dbUser => {
        res.json(dbUser);
    })
  });
};
