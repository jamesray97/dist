//video play button
var video = document.getElementById("vid");

function Play() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

$(".btn").click(function() {
  var $this = $(this);
  $this.toggleClass("Hide Map");
  if ($this.hasClass("Hide Map")) {
    $this.text("Show Map");
  } else {
    $this.text("Hide Map");
  }
});

//********************************************************************** */
// HIDE SHOW MAP
$(function() {
  var show = true;
  $(".btn").on("click", function() {
    if (show) {
      $("#map").animate({
        opacity: "0"
      });
      $("#text1").animate({
        opacity: "0"
      });
      $("#text2").animate({
        opacity: "0"
      });
      show = false;
    } else {
      $("#map").animate({
        opacity: "1"
      });
      $("#text1").animate({
        opacity: "1"
      });
      $("#text2").animate({
        opacity: "1"
      });
      show = true;
    }
  });
});

//********************************************************************** */
//TOGGLE AUDIO

if ($("#vid").prop("muted", true)) {
  $("#mute").css("background-image", "url(./img/mute/mute.png)");
}

$("#mute").click(function() {
  if ($("#vid").prop("muted")) {
    $("#vid").prop("muted", false);
    $("#mute").css("background-image", "url(./img/mute/un-mute.png)");
  } else {
    $("#vid").prop("muted", true);
    $("#mute").css("background-image", "url(./img/mute/mute.png)");
  }
});


$(window).on("load", function() {
  $(".preloader").fadeOut("slow", function() {
    $(".preloader-top").addClass("slide-top");
  });
});
