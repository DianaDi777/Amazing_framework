$(document).ready(function () {
  $("#docTabs")
    .find("a")
    .on("click", function (e) {
      e.preventDefault();

      var $desc = $("#docDesciption");

      switch ($(this).attr("href")) {
        //sub menue load
        case "011.html":
          $desc.load("doc/paragraphs.html");
          break;
        case "012.html":
          $desc.load("doc/texttransform.html");
          break;
        case "013.html":
          $desc.load("doc/fontsizes.html");
          break;
        case "014.html":
          $desc.load("doc/typefaces.html");
          break;
        case "015.html":
          $desc.load("doc/quotes.html");
          break;
        case "016.html":
          $desc.load("doc/lists.html");
          break;
        case "017.html":
          $desc.load("doc/titles.html");
          break;
        case "018.html":
          $desc.load("doc/textdecor.html");
          break;

        //submenue ends
        case "02.html":
          $desc.load("doc/.html");
          break;

        case "03.html":
          $desc.load("../.html");
          break;
        case "04.html":
          $desc.load("doc/flex.html");
          break;
        case "05.html":
          $desc.load("../.html");
          break;
        case "06.html":
          $desc.load("doc/icons2.html");
          break;
        case "07.html":
          $desc.load("doc/.html");
          break;
      }
    });
}); //end doc ready
