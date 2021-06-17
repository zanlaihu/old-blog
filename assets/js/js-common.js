$(function () {
  const js = "<a href='js.html'><div class='note-title'>JavaScript</div></a>";
  const js1 = "<a href='js-1.html'><div>1 什么是JavaScript</div></a>";
  const js2 = "<a href='js-2.html'><div>2 script标签</div></a>";
  const js3 = "<a href='js-3.html'><div>3 语法</div></a>";
  const js4 = "<a href='js-4.html'><div>4 var,let,const</div></a>";
  const js5 = "<a href='js-5.html'><div>5 数据类型</div></a>";
  const js6 = "<a href='js-6.html'><div>6 数据类型之对象</div></a>";
  const js7 = "<a href='js-7.html'><div>7 操作符</div></a>";
  const js8 = "<a href='js-8.html'><div>8 语句</div></a>";
  const jsqa = "<a href='js-qa.html'><div>JavaScript问题汇总</div></a>";
  $(".sidebar").append(js, js1, js2, js3, js4, js5, js6, js7, js8, jsqa);

  $(".dropdown-menu a:nth-of-type(1)").attr("href", "../../index.html");
  $(".dropdown-menu a:nth-of-type(2)").attr("href", "../../study-notes.html");
  $(".dropdown-menu a:nth-of-type(3)").attr("href", "../../skills.html");
  $(".dropdown-menu a:nth-of-type(4)").attr("href", "../../projects.html");
  $(".dropdown-menu a:nth-of-type(5)").attr("href", "../../about.html");

  $(".navigation-choice a:nth-of-type(1)").attr("href", "../../index.html");
  $(".navigation-choice a:nth-of-type(2)").attr(
    "href",
    "../../study-notes.html"
  );
  $(".navigation-choice a:nth-of-type(3)").attr("href", "../../skills.html");
  $(".navigation-choice a:nth-of-type(4)").attr("href", "../../projects.html");
  $(".navigation-choice a:nth-of-type(5)").attr("href", "../../about.html");
});
