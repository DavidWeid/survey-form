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
    survey = res;
    console.log(survey);
    $("#title").text(survey[0].name);
    $("#description").text(survey[0].description);
  });

  // Display custom header
  $("#header").text(`Welcome ${userName}`);
});
