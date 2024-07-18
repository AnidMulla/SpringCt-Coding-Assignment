$(document).ready(function () {
  $("#dataTable").hide();
  console.log($("#formData"));
  $("#formData").submit(function (event) {
    event.preventDefault();
    var formData = {
      name: $("#name").val(),
      password: $("#password").val(),
      email: $("#email").val(),
      subject: $("#subject").val(),
    };
    var currentData = JSON.parse(localStorage.getItem("formData")) || [];
    currentData.push(formData);
    localStorage.setItem("formData", JSON.stringify(currentData));
    $("#formData")[0].reset();
  });
});
function showFormData(tableData) {
  var tbody = $("#dataTable tbody");
  tbody.empty();
  tableData.forEach(function (el) {
    var dataRow =
      "<tr><td>" +
      el.name +
      "</td><td>" +
      el.email +
      "</td><td>" +
      el.subject +
      "</td></tr>";
    tbody.append(dataRow);
  });
}
$("#show").click(function () {
  $("#formData").hide();
  $("#dataTable").show();
  var localData = JSON.parse(localStorage.getItem("formData")) || [];
  showFormData(localData);
});

$("#add").click(function () {
  $("#dataTable").hide();
  $("#formData").show();
});
