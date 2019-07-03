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
      fullname: "David Weid",
      completed: true
    });
    db.User.create({
      fullname: "Jessica Nasab"
    });
    db.User.create({
      fullname: "Javier Aleman"
    });
    db.User.create({
      fullname: "Maria Castro"
    });
    db.User.create({
      fullname: "Cherie Sherman"
    });
    db.User.create({
      fullname: "Amy Mendez"
    });
    db.Survey.create({
      name: "Test Survey 1",
      description: "Please answer the following questions as best and honestly as you can. Your answers will be completely anonymous. Remember, your feedback is greatly appreciated!",
      active: true
    });
    db.Question.create({
      text: "Question 1 text",
      type: "radio",
      SurveyId: 1
    });
    db.Question.create({
      text: "Question 2 text",
      type: "radio",
      SurveyId: 1
    });
    db.Answer.create({
      style: "radio",
      value: "Answer 1",
      QuestionId: 1
    });
    db.Answer.create({
      style: "radio",
      value: "Answer 2",
      QuestionId: 1
    });    db.Answer.create({
      style: "radio",
      value: "Answer 3",
      QuestionId: 1
    });
    db.Answer.create({
      style: "radio",
      value: "Answer 2.1",
      QuestionId: 2
    });
    db.Answer.create({
      style: "radio",
      value: "Answer 2.2",
      QuestionId: 2
    });    db.Answer.create({
      style: "radio",
      value: "Answer 2.3",
      QuestionId: 2
    });

    app.listen(PORT, () => {
      console.log("Listening on port %s", PORT);
    });
  })
  .catch(err => {
    console.log(err, "Something went wrong in the server.");
  });
