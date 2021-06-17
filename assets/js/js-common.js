$(function () {
  const js =
    "<a href='js.html'><div class='note-title'>JavaScript</div></a><a href='js-1.html'><div>1 什么是JavaScript</div></a><a href='js-2.html'><div>2 script标签</div></a><a href='js-3.html'><div>3 语法</div></a><a href='js-4.html'><div>4 var,let,const</div></a><a href='js-5.html'><div>5 语法</div></a><a href='js-6.html'><div>6 var,let,const</div></a><a href='js-7.html'><div>7 数据类型</div></a><a href='js-8.html'><div>8 对象</div></a><a href='js-9.html'><div>9 操作符</div></a><a href='js-10.html'><div>10 语句</div></a>";
  $(".sidebar").append(js);

  $(".dropdown-menu a:nth-of-type(1)").attr("href", "../../index.html");
  $(".dropdown-menu a:nth-of-type(2)").attr("href", "../../study-notes.html");
  $(".dropdown-menu a:nth-of-type(3)").attr("href", "../../skills.html");
  $(".dropdown-menu a:nth-of-type(4)").attr("href", "../../projects.html");
  $(".dropdown-menu a:nth-of-type(5)").attr("href", "../../about.html");
});
