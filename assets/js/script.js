// function to get value from textarea
var save = function () {
  var number9 = localStorage.getItem("number9");
  $("#9").val(number9);
  var number10 = localStorage.getItem("number10");
  $("#10").val(number10);
  var number11 = localStorage.getItem("number11");
  $("#11").val(number11);
  var number12 = localStorage.getItem("number12");
  $("#12").val(number12);
  var number13 = localStorage.getItem("number13");
  $("#13").val(number13);
  var number14 = localStorage.getItem("number14");
  $("#14").val(number14);
  var number15 = localStorage.getItem("number15");
  $("#15").val(number15);
  var number16 = localStorage.getItem("number16");
  $("#16").val(number16);
  var number17 = localStorage.getItem("number17");
  $("#17").val(number17);
};
// function to set textarea content on click
$(".saveBtn").click(function () {
  var textarea = $(this).siblings("textarea")[0].value;
  var idSelect = $(this).siblings("textarea")[0].id;
  localStorage.setItem("number" + idSelect, textarea);
});
// pulls current hour using moment.js
var CurrentHour = moment().hour();
// function to verify hour with ID
var verifyTime = function () {
  var textArea = $("textarea");
  var lengthArr = [0, 1, 2, 3, 4, 5, 6, 7, 8]; // array of textarea elements
  for (var i = 0; i < lengthArr.length; i++) {
    var idLoop = textArea[i]; // iterable variable to loop through ID's
    if (CurrentHour === i + 9) {
      // +9 was used to match textarea Id's
      idLoop.classList.add("present");
      idLoop.classList.remove("future");
      idLoop.classList.remove("past");
    } else if (CurrentHour < i + 9) {
      idLoop.classList.add("future");
      idLoop.classList.remove("present");
      idLoop.classList.remove("past");
    } else {
      idLoop.classList.add("past");
      idLoop.classList.remove("future");
      idLoop.classList.remove("present");
    }
  }
};
verifyTime();
save();