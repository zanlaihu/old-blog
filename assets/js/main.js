$(function () {
  //点击菜单按钮事件
  let i = 1;
  $(".inner-header-icon").click(function () {
    // 交叉横线变化
    if (i > 0) {
      i = i - 1;
      $(this).addClass("inner-header-icon-click");
      $(this).removeClass("inner-header-icon-out");
    } else {
      i = i + 1;
      $(this).removeClass("inner-header-icon-click");
      $(this).addClass("inner-header-icon-out");
    }

    // 下拉弹出
    if ($(".dropdown").css("height") == "300px") {
      $(".dropdown").animate({ height: "50px" });
    } else {
      $(".dropdown").animate({ height: "300px" });
    }

    //
    $(".dropdown-menu").slideToggle();
  });




});
