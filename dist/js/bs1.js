//********************************************************************** */
//SVG ON CLICK

$(document).ready(function() {
  $("#Quay-NelsonStreet").click(function() {
    //Hide other image containers (if open)
    $(".slides-container").each(function() {
      $(this).hide();
    });
    // Unselect all circles
    $(".circles").each(function() {
      $(this).removeClass("selected-circle");
    });
    //Select the current circle
    $(this).addClass("selected-circle");
    //Show the target image container
    $("#nelsonStImgs").fadeIn();
    //animaiton complete
    $(".page-container").addClass("gallery-open");
  });

  $("#LeonardLane").click(function() {
    //Hide other image containers (if open)
    $(".slides-container").each(function() {
      $(this).hide();
    });
    // Unselect all circles
    $(".circles").each(function() {
      $(this).removeClass("selected-circle");
    });
    //Select the current circle
    $(this).addClass("selected-circle");
    //Show the target image container
    $("#leonardLaneImgs").fadeIn();
    //animaiton complete

    $(".page-container").addClass("gallery-open");
  });

  $(".close-button").click(function() {
    $(".page-container").removeClass("gallery-open");
    $(this)
      .closest(".slides-container")
      .fadeToggle();
    $(".circles").each(function() {
      $(this).removeClass("selected-circle");
    });
  });

  $(".flexbox-slide").on("click", function() {
    var clickedImage = $(this).children("img")[0];
    console.log(clickedImage);
    var imgSrc = clickedImage.src;
    console.log("you clicked on ", imgSrc);
    $(".big-image img")[0].src = imgSrc;

    var title = $(clickedImage).data("slide-title");
    var subTitle = $(clickedImage).data("slide-subtitle");
    if (title || subTitle) {
      if (title) {
        $(".big-image .big-image-caption h2").text(title);
        $(".big-image .big-image-caption h2").show();
      } else {
        $(".big-image .big-image-caption h2").hide();
      }
      if (subTitle) {
        $(".big-image .big-image-caption p").text(subTitle);
        $(".big-image .big-image-caption p").show();
      } else {
        $(".big-image .big-image-caption p").hide();
      }
      $(".big-image .big-image-caption").show();
    } else {
      $(".big-image .big-image-caption").hide();
    }
    $(".big-image").fadeIn("slow");
  });

  $(".big-image .close-big-image").on("click", function() {
    $(this)
      .closest(".big-image")
      .fadeOut("slow");
  });
});
//********************************************************************** */
// BS1 TOOLTIP

$("#ParkStreet").tooltipster({
  theme: "tooltipster-shadow"
});
$("#FrogmoreStreet").tooltipster({
  theme: "tooltipster-shadow"
});
$("#LeonardLane").tooltipster({
  theme: "tooltipster-shadow"
});
$("#SmallStreet").tooltipster({
  theme: "tooltipster-shadow"
});
$("#BellLane").tooltipster({
  theme: "tooltipster-shadow"
});
$("#Quay-NelsonStreet").tooltipster({
  theme: "tooltipster-shadow"
});
$("#Bearpit").tooltipster({
  theme: "tooltipster-shadow"
});
$("#StokesCroft").tooltipster({
  theme: "tooltipster-shadow"
});
