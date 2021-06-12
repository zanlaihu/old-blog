$(function () {
  //点击菜单按钮事件
  let i = 1;
  $(".inner-header-icon").click(function () {
    if (i > 0) {
      i = i - 1;
      $(this).addClass("inner-header-icon-click");
      $(this).removeClass("inner-header-icon-out");
    } else {
      i = i + 1;
      $(this).removeClass("inner-header-icon-click");
      $(this).addClass("inner-header-icon-out");
    }
    // $(".inner-nav").slideToggle(250);
    if ($(".dropdown").css("height") == "300px") {
      $(".dropdown").animate({ height: "50px" });
    } else {
      $(".dropdown").animate({ height: "300px" });
    }
  });
  //
  $(".dropdown-menu a").each(function (index) {
    $(this).css({ "animation-delay": index / 10 + "s" });
  });
});
