$(function () {
  $("#menu-btn").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).text("Menu");
      $("#menu").removeClass("open");
      $(".menu-background").removeClass("open");
    } else {
      $(this).addClass("active");
      $(this).text("Close");
      $("#menu").addClass("open");
      $(".menu-background").addClass("open");
    }
  });
  $(".menu-background").on("click", function () {
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");

      $("#menu-btn").removeClass("active").text("Menu");
      $("#menu").removeClass("open");
    }
  });
});
