$(document).ready(function () {
  $("#docTabs")
    .find("a")
    .on("click", function (e) {
      e.preventDefault();

      //   $("#critterDesciption").load("../data/turtle.html");

      var $desc = $("#docDesciption");

      switch ($(this).attr("href")) {
        case "01.html":
          $desc.load("type.html");
          break;
        case "01.html":
          $desc.load("../data/turtle.html");
          break;

        case "02.html":
          $desc.load("../data/shark.html");
          break;
        case "03.html":
          $desc.load("../data/seal.html");
          break;
        case "03.html":
          $desc.load("../data/seal.html");
          break;
        case "03.html":
          $desc.load("../data/seal.html");
          break;
        case "06.html":
          $desc.load("doc/icons.html");
          break;
      }
    });
}); //end doc ready
