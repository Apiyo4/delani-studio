$(document).ready(function() {
  $("#one").click(function() {
    $(".p1, .img12").toggle();
  });
  $("#two").click(function() {
    $(".p2, .img13").toggle();
  });
  $("#three").click(function() {
    $(".p3, .img14").toggle();
  });

  $('.para').hover(function() {
      $(this).animate({
        opacity: '1'
      });
    },
    function() {
      $(this).animate({
        opacity: '0'
      });
    });
});
