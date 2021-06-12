$(function () {
  // navigation
  $(".navigation").click(function () {
    if ($(".dropdown").css("height") == "300px") {
      $(".dropdown").animate({ height: "50px" });
    } else {
      $(".dropdown").animate({ height: "300px" });
    }
  });
});
