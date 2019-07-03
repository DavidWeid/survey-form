$(document).ready(function() {
  let users;

  //Grab all Users
  $.ajax({
    url: "/api/users",
    method: "GET"
  }).then(res => {
    users = res;
    console.log(users);
  });

  // When User clicks "Employee", display "employee-select"
  $("#employee-btn").click(() => {
    $(".secondary-btn-div").empty();
    const employees = users;
    const dropDownItemArr = employees.map(employee => {

        let disabled = "true-disabled";

        if (employee.completed === false) {
            disabled = "false-disabled";
        }

        console.log(disabled);

      return $("<a/>")
        .attr("href", "./survey")
        .addClass("employee-name-choice name-btn")
        .addClass(disabled)
        .attr("id", employee.id)
        .attr("disabled", disabled)
        .attr("onClick", "runSurvey(this.id, this.innerHTML)")
        .html(employee.fullname);
    });
    const dropDownDiv = $("<div/>");
    const employeeSelect = $("<button>Select Name</button>");
    const dropDownMenu = $("<div/>");

    dropDownDiv.addClass("dropdown");
    employeeSelect
      .addClass("btn dropbtn")
      .attr("id", "employee-select")
      .attr("onClick", "dropDownAction()");
    dropDownMenu.addClass("dropdown-content").attr("id", "employeeDropDown");
    $(".secondary-btn-div").append(dropDownDiv);
    $(dropDownDiv).append(employeeSelect, dropDownMenu);
    for (let i = 0; i < dropDownItemArr.length; i++) {
      $(dropDownMenu).append(dropDownItemArr[i]);
    }
  });
});

// Show dropdown menu
const dropDownAction = () => {
  $("#employeeDropDown").toggleClass("show");
};

// Close dropdown menu on window click
$(window).click(e => {
  if (!e.target.matches(".dropbtn")) {
    const dropdowns = $(".dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      $(openDropdown).removeClass("show");
    }
  }
});

const runSurvey = (id, name) => {
    console.log(id, name);
    localStorage.setItem("user-id", id);
    localStorage.setItem("user-name", name);
}
// End doc.ready
