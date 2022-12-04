let color = $(".navbart").outerWidth();
$(".navbart").animate({ left: -color }, 500);
$(".mark").click(() => {
  $(".navbart").animate({ left: -color }, 500);
});
$(".open").click(() => {
  if ($(".navbart").css("left") == "0px") {
    $(".navbart").animate({ left: -color }, 500);
  } else {
    $(".navbart").animate({ left: "0px" }, 500);
  }
});

$(document).ready(function () {
  $("#singers div:first").css("display", "block");
  $("#singers h4").click(function () {
    $(this).next().slideToggle(500);
    $("#singers div").not($(this).next()).slideUp(500);
  });
});

function Time() {
  var now = new Date();
  var eventDate = new Date(2022, 12, 28);
  var currentTiime = now.getTime();
  var eventTime = eventDate.getTime();
  var remTime = eventTime - currentTiime;
  var s = Math.floor(remTime / 1000);
  var m = Math.floor(s / 60);
  var h = Math.floor(m / 60);
  var d = Math.floor(h / 24) - 30;
  h %= 24;
  m %= 60;
  s %= 60;
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  document.getElementById("days").innerHTML = "<h3>" + d + " D" + "</h3>";
  document.getElementById("days").innerHTML = "<h3>" + d + " D" + "</h3>";
  document.getElementById("hours").innerHTML = "<h3>" + h + " h" + "</h3>";
  document.getElementById("minutes").innerHTML = "<h3>" + m + " m" + "</h3>";
  document.getElementById("seconds").innerHTML = "<h3>" + s + " s" + "</h3>";
  setTimeout(Time, 1000);
}

Time();

$(function () {
  var max = 100;
  $("#text").keyup(function () {
    var length = $(this).val().length;
    var character = max - length;
    console.log(character);
    if (character <= 0) {
      $("#char").text("your available character finished");
    } else {
      $("#char").text(character);
    }
  });
});
