//// Save data to localStorage for reuse on save click
//// localStorage persistence
//// fix textarea css
// TODO: Set calendar clock to change colors for past, present, future

var save = $(".saveBtn");

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

$(".saveBtn").click(function () {
  // var time = new Date();
  // var thisTime =  (time.getMonth()+1) + '-' + time.getDate() + '-' + time.getFullYear() + ' -- ' + time.getHours() + ':' + time.getMinutes();

  var textarea = $(this).siblings("textarea")[0].value;
  var idSelect = $(this).siblings("textarea")[0].id;

  localStorage.setItem("number" + idSelect, textarea);

  console.log(idSelect);
});

save();
