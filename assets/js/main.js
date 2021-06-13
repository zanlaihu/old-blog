$(function () {
  //点击菜单按钮事件
  let i = 1;
  $(".inner-header-icon").click(function () {
    // 交叉横线变化
    if (i > 0) {
      i = i - 1;
      $(this).addClass("inner-header-icon-click");
      $(this).removeClass("inner-header-icon-out");
      $(".dropdown").animate({ height: "390px" });
    } else {
      i = i + 1;
      $(this).removeClass("inner-header-icon-click");
      $(this).addClass("inner-header-icon-out");
      $(".dropdown").animate({ height: "40px" });
    }

    // 下拉弹出选项
    $(".dropdown-menu").slideToggle();
    $(".dropdown-line").fadeToggle("fast");
  });

  $(".inner-header-icon").hover(function () {
    $(".inner-header-icon span").animate({"backgroud":"white"});
  });
});
