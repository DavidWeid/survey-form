$(document).ready(function() {
  const userID = localStorage.getItem("user-id");
  const userName = localStorage.getItem("user-name");
  let survey;
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

});
