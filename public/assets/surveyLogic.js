$(document).ready(function() {
  const userID = localStorage.getItem("user-id");
  const userName = localStorage.getItem("user-name");
  let survey;
  console.log(userID);
  console.log(userName);

  // Grab active Survey
  $.ajax({
    url: "/api/surveys/active",
    method: "GET"
  }).then(res => {
    survey = res[0];
    console.log(survey);
    $("#title").text(survey.name);
    $("#description").text(survey.description);
  });

  // Display custom header
  $("#header").text(`Welcome ${userName}`);
});
