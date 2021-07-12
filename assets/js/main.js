$(function () {
  const newText = "7月11日，增加了项目经历页面，还需填充更多内容。";
  $(".news-text").append(newText);
  //点击菜单按钮事件
  let i = 1;
  $(".inner-header-icon").click(function () {
    // 交叉横线变化
    if (i > 0) {
      i = i - 1;
      // =变叉
      $(this).addClass("inner-header-icon-click");
      $(this).removeClass("inner-header-icon-out");
      // 向下拉伸
      $(".dropdown").animate({ height: "350px" });
    } else {
      i = i + 1;
      // 叉变=
      $(this).removeClass("inner-header-icon-click");
      $(this).addClass("inner-header-icon-out");
      // 向上收回
      $(".dropdown").animate({ height: "40px" });
    }

    // 下拉弹出选项
    $(".dropdown-menu").slideToggle();
    $(".dropdown-line").fadeToggle("fast");
  });
});
