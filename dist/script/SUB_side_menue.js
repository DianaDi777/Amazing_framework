//btn for mobile screen changes
$(".btnHAM").click(function () {
  $(this).toggleClass("clickHAM");
});

//sub menu - arrow toggle; colors change and menue collapses
$(".feat-btn").click(function () {
  $("nav ul .feat-show").toggleClass("show");
  $("nav ul .first").toggleClass("rotate");
});

$("nav ul li").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
});
