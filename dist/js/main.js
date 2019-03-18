//video play button
var video = document.getElementById("vid");

function Play() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
//change classes on click
// $("body").on("click", ".btn", function(e) {
//   e.preventDefault();
//   if ($(this).hasClass("play")) {
//     $(this).removeClass("play");
//     $(this).addClass("pause");
//   } else {
//     $(this).removeClass("pause");
//     $(this).addClass("play");
//   }
// });

$(".btn").click(function() {
  var $this = $(this);
  $this.toggleClass("Hide Map");
  if ($this.hasClass("Hide Map")) {
    $this.text("Show Map");
  } else {
    $this.text("Hide Map");
  }
});

// $(".play-video").click(function(goToUrl) {
//   var $this = $(this);
//   $this.toggleClass("Hide Map");
//   if ($this.hasClass("Hide Map")) {
//     $this.text("Show Map");
//   } else {
//     $this.text("Hide Map");
//   }
// });

//********************************************************************** */
//LOAD SCREEN
$(document).ready(function() {
  $(".preloader").addClass("complete");
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
      show = false;
    } else {
      $("#map").animate({
        opacity: "1"
      });
      show = true;
    }
  });
});
