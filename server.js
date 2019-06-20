const express = require("express");
// const routes = require("");
const db = require("./models");

const app = express();
const PORT = process.env.PORT || 3000;

const syncOptions = { force: false };
if (process.env.NODE_ENV === "development") {
  syncOptions.force = true;
}

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(routes);

db.sequelize
  .sync(syncOptions)
  .then(() => {
    db.User.create({
      fullname: "David Weid"
    });

    app.listen(PORT, () => {
      console.log("Listening on port %s", PORT);
    });
  })
  .catch(err => {
    console.log(err, "Something went wrong in the server.");
  });
