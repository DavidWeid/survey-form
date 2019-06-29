$(document).ready(function() {

    $.ajax({
        url: "/api/users",
        method: "GET"
    }).then((res) => {
        console.log(res);
    })

    $("#employee-btn").click(() => {
        $(".secondary-btn-div").empty();
        const employeeSelect = $("<button>Test</button>");
        $(".secondary-btn-div").append(employeeSelect);
    })

});
// End doc.ready