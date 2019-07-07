$(document).ready(function() {
  const userID = localStorage.getItem("user-id");
  const userName = localStorage.getItem("user-name");
  let survey;

  if (!userID || !userName) {
    window.location.replace("./");
  }

  console.log(userID);
  console.log(userName);

  // Display custom header
  $("#header").text(`Welcome ${userName}`);

  // Grab active Survey
  $.ajax({
    url: "/api/surveys/active",
    method: "GET"
  }).then(res => {
    survey = res[0];
    console.log(survey);
    $("#title").text(survey.name);
    $("#description").text(survey.description);

    const questionsArr = survey.Questions.map(question => {
      const questionText = question.text;
      console.log(questionText);
      return questionText;
    });
    console.log(questionsArr);
  });

  $("#other").on("click", () => {
    console.log("Other clicked");
    console.log(this);
    console.log($(this));
    $("#other-text").attr("disabled", false);
  });

  $("#form-submit").on("click", e => {
    e.preventDefault();
    console.log("form-submit clicked");

    const data = $("#survey-form")
      .serializeArray()
      .reduce((obj, item) => {
        obj[item.name] = item.value;
        return obj;
      }, {});

    console.log(data);
  });
});
