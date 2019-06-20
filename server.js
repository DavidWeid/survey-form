const express = require("express");
// const routes = require("");
const db = require("./models");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(routes);

db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log("Listening on port %s", PORT);
  });
});
