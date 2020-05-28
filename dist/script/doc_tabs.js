$(document).ready(function () {
  $("#docTabs")
    .find("a")
    .on("click", function (e) {
      e.preventDefault();

      var $desc = $("#docDesciption");

      switch ($(this).attr("href")) {
        case "01.html":
          $desc.load("type.html");
          break;
        case "00.html":
          $desc.load("../icons.html");
          break;

        case "02.html":
          $desc.load("../icons.html");
          break;
        case "03.html":
          $desc.load("../icons.html");
          break;
        case "03.html":
          $desc.load("../.html");
          break;
        case "03.html":
          $desc.load("../.html");
          break;
        case "06.html":
          $desc.load("doc/icons.html");
          break;
      }
    });
}); //end doc ready
