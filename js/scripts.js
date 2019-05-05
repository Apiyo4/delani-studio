$(document).ready(function(event) {
  $("#one").click(function() {
    $(".p1, .img12").toggle();
  });
  $("#two").click(function() {
    $(".p2, .img13").toggle();
  });
  $("#three").click(function() {
    $(".p3, .img14").toggle();
  });
  $("#img4").hover(function() {
    $("#p4").toggle();
  });
  $("#img5").hover(function() {
    $("#p5").toggle();
  });
  $("#img6").hover(function() {
    $("#p6").toggle();
  });
  $("#img7").hover(function() {
    $("#p7").toggle();
  });
  $("#img8").hover(function() {
    $("#p8").toggle();
  });
  $("#img9").hover(function() {
    $("#p9").toggle();
  });
  $("#img10").hover(function() {
    $("#p10").toggle();
  });
  $("#img11").hover(function() {
    $("#p11").toggle();
  });
  event.preventDefault();
});
