$(document).ready(function() {
  let users;

  //Grab all Users
  $.ajax({
    url: "/api/users",
    method: "GET"
  }).then(res => {
    console.log(res);
    users = res;
    console.log(users);
  });

  // When User clicks "Employee", display "employee-select"
  $("#employee-btn").click(() => {
    const employees = users;
    console.log(employees);

    const dropDownItemArr = employees.map(employee => {
      return $("<a href='#'/>").attr("id", employee.id).html(employee.fullname);
    });

    console.log(dropDownItemArr);

    $(".secondary-btn-div").empty();
    const dropDownDiv = $("<div/>");
    const employeeSelect = $("<button>Select Name</button>");
    const dropDownMenu = $("<div/>");
    const dropDownItem = $("<a href='#'>Hello</a>");

    dropDownDiv.addClass("dropdown");
    employeeSelect
      .addClass("btn dropbtn")
      .attr("id", "employee-select")
      .attr("onClick", "dropDownAction()");
    dropDownMenu.addClass("dropdown-content").attr("id", "employeeDropDown");
    $(".secondary-btn-div").append(dropDownDiv);
    $(dropDownDiv).append(employeeSelect, dropDownMenu);
    $(dropDownMenu).append(dropDownItem);
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
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
});
// End doc.ready
