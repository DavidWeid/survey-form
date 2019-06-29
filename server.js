const express = require("express");
const db = require("./models");

const app = express();
const PORT = process.env.PORT || 3000;

const syncOptions = { force: true };
if (process.env.NODE_ENV === "development") {
  syncOptions.force = true;
}

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

db.sequelize
  .sync(syncOptions)
  .then(() => {
    db.User.create({
      fullname: "David Weid"
    });
    db.User.create({
      fullname: "Jessica Nasab"
    });

    app.listen(PORT, () => {
      console.log("Listening on port %s", PORT);
    });
  })
  .catch(err => {
    console.log(err, "Something went wrong in the server.");
  });
